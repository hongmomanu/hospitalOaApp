(ns hospitaloaapp.controllers.chatgroup
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.ChatGroupCtrl [$sce $scope FileUploader  $location $timeout $ionicPopup $ionicLoading MessageService  $rootScope $ionicScrollDelegate $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "ChatGroupCtrl" $stateParams)

    (! $scope.deptname $stateParams.deptName)



     (! $scope.uploader  (new FileUploader (obj :url (str js/serverurl "uploadfile"))))

    (println "FileUploader" $scope.uploader)
    (! $scope.progress 0)

    (! $scope.uploader.onAfterAddingFile  (fn [fileItem] (-> fileItem
                                                                (.upload )

                                                                )))



    (! $scope.uploader.onSuccessItem  (fn [fileItem response status headers]

                                        (println  response)
                                        ;;(js/JSON )
                                        (.hide $ionicLoading)

                                        (if response.success

                                          (do (case (.slice response.filetype 0 5)
                                          "video" (do  (println "video")
                                                    ($timeout (fn []
                                                                (! $scope.messagetext (str "<video width=\"100%\" height=\"100%\" preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></video>")

                                                                 )
                                                                ( $scope.addmessage "video")

                                                                ) 0 )




                                                    )

                                           "audio"  (do (println "audio")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<audio width=\"100%\" height=\"100%\" preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>")

                                                                 )
                                                                ( $scope.addmessage "audio")

                                                                ) 0 )
                                                      )

                                            "image" (do (println "image")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<img width=\"100%\" height=\"100%\"  src=\"" js/serverurl "files/"
                                                                               response.filename "\"></img>")

                                                                 )
                                                                ( $scope.addmessage "image")

                                                                ) 0 )

                                                      )

                                            "default"))

                                          (.alert $ionicPopup (obj :title "传输失败" :template "网络错误"))

                                          )


                                        ))






    (! $scope.uploader.onErrorItem  (fn [fileItem response status headers] (println "error"  response
                                                                (.hide $ionicLoading)
                                                                )))



    (! $scope.uploader.onProgressItem  (fn [fileItem progress]

                                          (! $scope.progress progress)
                                          (println $scope.progress)
                                          (.show $ionicLoading (obj :template (str "传输中..." $scope.progress "%")
                                                                    :animation "fade-in"
                                                                    :showBackdrop true

                                                                    :showDelay 0
                                                                    ))



                                          ))




    (! $scope.messagetext "")

    (! $scope.addfiles (fn [](do

                              ;(.trigger (js/$ "#groupmsgfiles") "click")

                              (.trigger (.element js/angular "#groupmsgfiles") "click")
                               (println "addfiles")


                              )))


    (.$on $scope "receivegmsg" (fn [event data] (println "receivegmsg" event data (= data.data.fromid data.data.toid))

                                     (when-not (= data.data.fromid data.data.toid)


                                                   (when (> (js->clj(-> $location
                                                       (.url)

                                                       (.indexOf data.data.groupid)

                                                       )) 0) ($timeout (fn[](do (.push $scope.messages (obj :time data.data.time  :content data.data.content :local false :realname
                                                                    (str "<a>" data.data.fromname (.date js/$.format (new js/Date data.data.time ) "M-dd hh:mm") "</a>")))
                                                              (println $scope.messages)
                                                              (aset js/newmessages data.data.groupid nil)
                                                              ;(.$broadcast $rootScope "updatedeptpersons")
                                                              (println "hahahah")
                                                              (.$broadcast $rootScope "updatemsgnums")
                                                              (.scrollBottom $ionicScrollDelegate true)

                                                              )) 0)

                                                     )






                                       )


                                            ))




    (! $scope.trustHtml (fn [htmlCode]

                         (
            .trustAsHtml $sce htmlCode
        )))





    (! $scope.addmessage (fn [msgtype]

                           (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> MessageService
                           (.addgroupmessage (str "<p>" $scope.messagetext "</p>") msgtype js/localStorage.userid $stateParams.deptId  $stateParams.deptId "group" $stateParams.deptName js/localStorage.realname)
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.push $scope.messages (obj  :content (str "<p>"   $scope.messagetext "</p>") :local true :realname (str "<a>" js/localStorage.realname (.date js/$.format (new js/Date) "M-dd hh:mm") "</a>")))

                                        (println $scope.messages)

                                        (! $scope.messagetext "")

                                        (makemessage $stateParams.deptId $stateParams.deptName $rootScope)

                                        (.scrollBottom $ionicScrollDelegate true)

                                        )
                                      (.alert $ionicPopup (obj :title "发送失败" :template "网络错误"))


                                      )


                                    ))


                               )


                           ) )

    (! $scope.messages (clj->js [

  ]
       ))


    (let [msgs (aget js/newmessages $stateParams.deptId)]
        (doall (map #(.$broadcast $scope "receivegmsg" (clj->js %)) (js->clj msgs)))
         )


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (-> MessageService
                           (.getgroupmessagehistory js/localStorage.userid $stateParams.deptId  (if (nil? (first $scope.messages)) (.date js/$.format (new js/Date) "yyyy-M-ddTH:mm:ssZ") (aget (first $scope.messages) "time")) )
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (doall (map #(.unshift $scope.messages (obj :time (aget
                                                                                   (clj->js %)
                                                                                   "time"
                                                                                  )  :content (aget
                                                                                   (clj->js %)
                                                                                   "content"
                                                                                  ) :local (=(aget
                                                                                   (clj->js %)
                                                                                   "fromid"
                                                                                  ) js/localStorage.userid) :realname
                                                                    (str "<a>" (aget
                                                                                   (clj->js %)
                                                                                   "fromname"
                                                                                  ) (.date js/$.format (new js/Date (aget
                                                                                   (clj->js %)
                                                                                   "time"
                                                                                  ) ) "M-dd hh:mm") "</a>"))) (js->clj response.data)))

                                    (.$broadcast $scope "scroll.refreshComplete")

                                    ))


                               )

                          ))



  )


  )

(defn makemessage [deptId deptName $rootScope]


  (println "newmessages group group group" deptId deptName)
  (let [

        message  (js->clj js/localStorage.messages)
        messages (if (nil? message) {} (js->clj (.parse js/JSON js/localStorage.messages)))


        deloldmessages (dissoc messages  deptId)

        newmessages (assoc deloldmessages (keyword deptId) {:type "group" :title deptName :id deptId})

        ]


    (! js/localStorage.messages (.stringify js/JSON (clj->js newmessages)))
      (.$broadcast $rootScope "messageslistupdate")

    )

  )

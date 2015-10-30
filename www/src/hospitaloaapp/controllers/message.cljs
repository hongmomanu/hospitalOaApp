(ns hospitaloaapp.controllers.message
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.service starter.MessageService [$http]
  (obj
    :addmessage (fn [content ftype fromid toid groupid mtype toname fromname]
                (-> $http
                  (.post (str js/serverurl "addmessage") (obj :content content :ftype ftype
                                                              :fromid fromid :toid toid
                                                              :toname toname :fromname fromname
                                                              :groupid groupid :mtype mtype))
                  (.then (fn [response] response))
                  (.catch (fn[response] response))

                    ))


    ))



  (def.controller starter.controllers.MessageCtrl [$location $scope $timeout $ionicPopup $ionicLoading $rootScope $stateParams $compile MessageService]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "MessageCtrl" $stateParams (> (js->clj(-> $location
                                                       (.url)

                                                       (.indexOf $stateParams.messageId)

                                                       )) 0) )

    (! $scope.title $stateParams.title)






    (println "newmessagesnewmessages added" $scope.messages)


    (.$on $scope "receivepmsg" (fn [event data] (println "receivepmsg" event data (= data.data.fromid data.data.toid))

                                     (when-not (= data.data.fromid data.data.toid)
                                       ($timeout (fn[]

                                                   (when (> (js->clj(-> $location
                                                       (.url)

                                                       (.indexOf data.data.fromid)

                                                       )) 0)(do (.push $scope.messages (obj  :content data.data.content :local false :realname
                                                                    (str "<a>" data.data.fromname (.date js/$.format (new js/Date data.data.time ) "M-dd hh:mm") "</a>")))
                                                              (aset js/newmessages data.data.fromid nil)
                                                              (.$broadcast $rootScope "updatedeptpersons")
                                                              (.$broadcast $rootScope "updatemsgnums")


                                                              )





                                                     )




                                                   )

                                                 0
                                                 )

                                       )


                                            ))


    (! $scope.messages (clj->js []))

    (let [msgs (aget js/newmessages $stateParams.messageId)]
        (doall (map #(.$broadcast $scope "receivepmsg" (clj->js %)) (js->clj msgs)))
         )



    (! $scope.addmessage (fn []

                           (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> MessageService
                           (.addmessage (str "<p>" $scope.messagetext "</p>") "text" js/localStorage.userid $stateParams.messageId  "" "person" $stateParams.title js/localStorage.realname)
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.push $scope.messages (obj  :content (str "<p>" $scope.messagetext "</p>") :local true :realname (str "<a>" js/localStorage.realname "</a>")))

                                        (! $scope.messagetext "")

                                        )
                                      (.alert $ionicPopup (obj :title "发送失败" :template "网络错误"))


                                      )


                                    ))


                               )


                           ;(.push $scope.messages (obj  :content (str "<p>" $scope.messagetext "</p>") :realname "<a>张燕芳</a>"))
                           ;(.scrollBottom $ionicScrollDelegate true)
                           ;(makemessage $stateParams.messageId $stateParams.title $rootScope)
                           ) )


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (.unshift $scope.messages (obj  :content (str "<p>" (rand-int 100) "</p>") :realname "<a>张燕芳</a>"))
                          (.$broadcast $scope "scroll.refreshComplete")

                          ))


  )


  )

(defn makemessage [userId title $rootScope]



  (let [

        message  (js->clj js/localStorage.messages)
        messages (if (nil? message) {} (js->clj (.parse js/JSON js/localStorage.messages)))


        deloldmessages (dissoc messages  userId)

        newmessages (assoc deloldmessages (keyword userId) {:type "person" :title title :id userId})

        ]


    (! js/localStorage.messages (.stringify js/JSON (clj->js newmessages)))
      (.$broadcast $rootScope "messageslistupdate")

    )

  )

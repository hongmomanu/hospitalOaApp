(ns hospitaloaapp.controllers.chatgroup
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.ChatGroupCtrl [$scope MessageService  $rootScope $ionicScrollDelegate $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "ChatGroupCtrl" $stateParams)

    (! $scope.deptname $stateParams.deptName)






    (! $scope.messagetext "")


    (.$on $scope "receivegmsg" (fn [event data] (println "receivegmsg" event data (= data.data.fromid data.data.toid))

                                     (when-not (= data.data.fromid data.data.toid)
                                       ($timeout (fn[]

                                                   (when (> (js->clj(-> $location
                                                       (.url)

                                                       (.indexOf data.data.groupid)

                                                       )) 0)(do (.push $scope.messages (obj :time data.data.time  :content data.data.content :local false :realname
                                                                    (str "<a>" data.data.fromname (.date js/$.format (new js/Date data.data.time ) "M-dd hh:mm") "</a>")))
                                                              (aset js/newmessages data.data.fromid nil)
                                                              ;(.$broadcast $rootScope "updatedeptpersons")
                                                              (.$broadcast $rootScope "updatemsgnums")
                                                              (.scrollBottom $ionicScrollDelegate true)

                                                              )

                                                     )




                                                   )

                                                 0
                                                 )

                                       )


                                            ))





    (! $scope.addmessage (fn []

                           (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> MessageService
                           (.addgroupmessage (str "<p>" $scope.messagetext "</p>") "text" js/localStorage.userid $stateParams.messageId  $stateParams.deptId "person" $stateParams.title js/localStorage.realname)
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.push $scope.messages (obj  :content (str "<p>" $scope.messagetext "</p>") :local true :realname (str "<a>" js/localStorage.realname "</a>")))

                                        (! $scope.messagetext "")
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
        (doall (map #(.$broadcast $scope "receivepmsg" (clj->js %)) (js->clj msgs)))
         )


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (.unshift $scope.messages (obj  :content (str "<p>" (rand-int 100) "</p>") :realname "<a>张燕芳</a>"))
                          (.$broadcast $scope "scroll.refreshComplete")

                          ))



  )


  )

(defn makemessage [deptId deptName $rootScope]



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

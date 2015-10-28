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
    :addmessage (fn [content ftype fromid toid groupid mtype]
                (-> $http
                  (.post (str js/serverurl "addmessage") (obj :content content :ftype ftype
                                                              :fromid fromid :toid toid
                                                              :groupid groupid :mtype mtype))
                  (.then (fn [response] response))
                  (.catch (fn[response] response))

                    ))


    ))



  (def.controller starter.controllers.MessageCtrl [$scope $ionicPopup $ionicLoading $rootScope $stateParams $compile MessageService]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "MessageCtrl" $stateParams)

    (! $scope.title $stateParams.title)



    (! $scope.messages (clj->js [

  ]
       ))

    (! $scope.addmessage (fn []

                           (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> MessageService
                           (.addmessage (str "<p>" $scope.messagetext "</p>") "text" js/localStorage.userid $stateParams.messageId "" "person")
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

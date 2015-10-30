(ns hospitaloaapp.controllers.messages
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []
  (def.controller starter.controllers.MessagesCtrl [$scope $rootScope $state $timeout]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  (println "messages")

    (.$on $scope "messageslistupdate" (fn [event] (println "messageslistupdate")
                                                      (! $scope.messages (getmessages))
                                            ))

  (! $scope.messages  (getmessages) )

  (.$broadcast $rootScope "updatemsgnums")

  (! $scope.showchatview (fn [message]

                           (println "messagemessagemessage" message)

                           (if (= message.type "group")
                             (.go $state "app.chatgroupinfo" (obj :deptId message.id :deptName  message.title) )
                             (.go $state "app.chatsingleinfo" (obj :messageId message.id :title  message.title) )
                             )


                           )



     )


    (! $scope.updatelistener (.$on $rootScope "updatemsgnums" (fn []
                                 (println "updatemsgnums")
                                 ($timeout (fn[]
                                             (! $scope.messages
                                                (clj->js (map #(if (nil? (do (aget js/newmessages (get % "id")))) (conj % {:nums nil})
                                                                 (conj % {:nums (aget (aget js/newmessages (get % "id")) "length" )}))
                                                              (js->clj $scope.messages))))


                                             ) 0)





                                 )))


    (.$on $scope "$destroy" (fn []
                              ($scope.updatelistener)

                              ))






  )

  )

(defn getmessages []

  (let [
        message  (js->clj js/localStorage.messages)
        messages (if (nil? message) {} (js->clj (.parse js/JSON js/localStorage.messages)))

        messagesclj (map #(get messages %) (keys messages))

         ]


     (clj->js messagesclj)



     )

  )


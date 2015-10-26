(ns hospitaloaapp.controllers.messages
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []
  (def.controller starter.controllers.MessagesCtrl [$scope $rootScope]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  (println "messages")

    (.$on $rootScope "messageslistupdate" (fn [event] (println "messageslistupdate")
                                                      (! $scope.messages (getmessages))
                                            ))

  (! $scope.messages (getmessages))




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


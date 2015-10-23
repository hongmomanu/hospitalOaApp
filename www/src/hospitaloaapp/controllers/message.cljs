(ns hospitaloaapp.controllers.message
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.MessageCtrl [$scope $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "MessageCtrl")

  )


  )

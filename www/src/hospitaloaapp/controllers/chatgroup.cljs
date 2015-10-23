(ns hospitaloaapp.controllers.chatgroup
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.ChatGroupCtrl [$scope $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "ChatGroupCtrl")

    (! $scope.messages (clj->js [
    { :content "<p>Wow, this is really something huh?</p>" }
    { :content "<p>Yea, it\"s pretty sweet</p>" }
    { :content "<p>I think I like Ionic more than I like ice cream!</p>" }
    { :content "<p>Gee wiz, this is something special.</p>" }

    { :content "<p>Is this magic?</p>" }
    { :content "<p>Am I dreaming?</p>" }

      { :content "<p>Am I dreaming?</p>" }
        { :content "<p>Yea, it\"s pretty sweet</p>" }
      { :content "<p>I think I like Ionic more than I like ice cream!</p>" }
  ]
       ))



  )


  )

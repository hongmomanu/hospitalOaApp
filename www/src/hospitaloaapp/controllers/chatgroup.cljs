(ns hospitaloaapp.controllers.chatgroup
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.ChatGroupCtrl [$scope  $ionicScrollDelegate $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "ChatGroupCtrl" $stateParams)

    (! $scope.deptname $stateParams.deptName)

    (! $scope.addmessage (fn []
                           (.push $scope.messages (obj  :content "<p>Is this magic?</p>" :realname "<a>张燕芳</a>"))
                           (.scrollBottom $ionicScrollDelegate true)
                           ) )

    (! $scope.messages (clj->js [
    { :content "<p>Wow, this is really something huh?</p>" :realname "<a>董康然</a>" }
    { :content "<p>Yea, it\"s pretty sweet</p>" :realname "<a>张燕芳</a>"}
    { :content "<p>I think I like Ionic more than I like ice cream!</p>" :realname "<a>张燕芳</a>" }
    { :content "<p>Gee wiz, this is something special.</p>" :realname "<a>董康然</a>" }

    { :content "<p>Is this magic?</p>" :realname "<a>张燕芳</a>"}
    { :content "<p>Am I dreaming?</p>" :realname "<a>董康然</a>"}

      { :content "<p>Am I dreaming?</p>" :realname "<a>张燕芳</a>"}
        { :content "<p>Yea, it\"s pretty sweet</p>" :realname "<a>董康然</a>"}
      { :content "<p>I think I like Ionic more than I like ice cream!</p>" :realname "<a>张燕芳</a>"}
  ]
       ))



  )


  )

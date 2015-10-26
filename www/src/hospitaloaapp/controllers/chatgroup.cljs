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



    (makemessage $stateParams.deptId $stateParams.deptName)


    (! $scope.messagetext "")

    (! $scope.addmessage (fn []
                           (.push $scope.messages (obj  :content (str "<p>" $scope.messagetext "</p>") :realname "<a>张燕芳</a>"))
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


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (.unshift $scope.messages (obj  :content (str "<p>" (rand-int 100) "</p>") :realname "<a>张燕芳</a>"))
                          (.$broadcast $scope "scroll.refreshComplete")

                          ))



  )


  )

(defn makemessage [deptId deptName]

    (println "makemessage"   (js->clj js/localStorage.messages))

  (let [

        messages (if (nil?  (js->clj js/localStorage.messages)) {} (js->clj (.parse js/JSON js/localStorage.messages)))

          newmessages (conj messages { (keyword deptId) {:type "group" :name deptName :id deptId}})

        ]
    (println newmessages)

    (! js/localStorage.messages (.stringify js/JSON (clj->js newmessages)))

    )

  )

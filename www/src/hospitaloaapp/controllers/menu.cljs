(ns hospitaloaapp.controllers.menu
  (:require [clojure.browser.repl :as repl]
            [hospitaloaapp.controllers.websocket :as websocket]
            )
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []





  (def.controller starter.controllers.MenuCtrl [$scope  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "MenuCtrl")

    (! $scope.user (obj :deptname js/localStorage.deptname  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))



  (! $scope.login (fn[]

                  (.$broadcast $rootScope "login")

                  )


   )

    (.$on $rootScope "updatemenu" (fn [event] (println "updatemenu")

                                    (! $scope.user (obj :deptname js/localStorage.deptname  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))

                                    ))








  )


  )

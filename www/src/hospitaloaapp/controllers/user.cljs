(ns hospitaloaapp.controllers.user
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


  (def.service starter.UserService [$http]
  (obj
    :login (fn [username password]
                (-> $http
                  (.get (str js/serverurl "login") (obj :params {:username  username :password password}  ) )
                  (.then (fn [response] response))))


    ))


  (def.controller starter.controllers.UserCtrl [$scope  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "UserCtrl")

    (! $scope.user (obj :deptname js/localStorage.deptname  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))

    (! $scope.signIn (fn[]
                       (.show $ionicLoading (obj :template "登录中..." :duration 5000))

                       (-> UserService
                           (.login $scope.user.username $scope.user.password)
                           (.then (fn [response]
                                    (.hide $ionicLoading)
                                    (.closeLogin $scope)
                                    (if (js->clj response.data.success)
                                      (do
                                        (! js/localStorage.username response.data.user.username)
                                        (! js/localStorage.password response.data.user.password)
                                        (! js/localStorage.realname response.data.user.realname)
                                        (! js/localStorage.userid response.data.user._id)
                                        (! js/localStorage.deptname response.data.user.deptname)


                                        (.$broadcast $rootScope "updatemenu")

                                        (websocket/init  $rootScope)
                                        (.go $state "app.depts")


                                        )
                                      (.alert $ionicPopup (obj :title "登录提示" :template response.data.message))


                                      )

                                    ;(println (doall (map #(conj % {:title (:deptname %) }) response.data)))
                                     (! $scope.depts response.data)

                                    )))

                       ))



    (.signIn $scope)


    (! $scope.loginData  {})


  (-> (.fromTemplateUrl  $ionicModal "templates/login.html" (clj->js {
                                                                       :scope $scope
                                                                       })) (.then  (fn [modal] (
                                                                                                 ! $scope.modal modal
                                                                                                 ))))









  (! $scope.closeLogin (fn [] ( .hide $scope.modal
                                )))

  (! $scope.login (fn [] (.show $scope.modal )

                    ))

  (! $scope.doLogin (fn []

                      ($timeout (fn [] (.closeLogin $scope)) 1000)

                      ))


    (.$on $rootScope "login" (fn [event] (println "login")
                                                      (.login $scope)
                                            ))



  )


  )

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

   :fireunreadmsgs (fn [userid deptid]
                (-> $http
                  (.get (str js/serverurl "getunreadmessages") (obj :params {:userid  userid :deptid deptid}  ) )
                  (.then (fn [response] response))))


   :fireunreadnotifications (fn [userid]
                (-> $http
                  (.get (str js/serverurl "getunreadnotifications") (obj :params {:userid  userid}  ) )
                  (.then (fn [response] response))))


    ))


  (def.controller starter.controllers.UserCtrl [$scope $ionicHistory $sce MessageService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
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
                                        (! js/localStorage.deptid response.data.user.deptid)
                                        (! js/localStorage.deptname response.data.user.deptname)


                                        (.$broadcast $rootScope "updatemenu")

                                        (websocket/init  $rootScope)

                                        (.nextViewOptions $ionicHistory (obj :disableBack true))

                                        (.go $state "app.notification")


                                        (.on js/cordova.plugins.notification.local "click" (fn [notification]



                (let [
                      notificationdata (.parse js/JSON notification.data)

                      ]

                  (case notificationdata.data.data.mtype


                            "person" (do (println "person")
                                              ;;(js/alert "person")
                                              (.go $state "app.chatsingleinfo" (obj :messageId notificationdata.data.data.fromid :title  notificationdata.data.data.fromname) )


                                              )

                            "group" (do (println "group")

                                              (.go $state "app.chatgroupinfo" (obj :deptId notificationdata.data.data.groupid :deptName  notificationdata.data.data.toname) )

                                              )


                            (.go $state "app.notification"))

                  )





                                                         ))



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








    (! $scope.videochaturl "http://www.baidu.com")









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


    (.$on $rootScope "getunreadmsgs" (fn [event]

                                       (-> UserService
                           (.fireunreadmsgs js/localStorage.userid js/localStorage.deptid)
                           (.then (fn [response]
                                    (println "getunreadmsgs")

                                    )))
                                            ))




 (.$on $rootScope "getunreadnotifications" (fn [event]

                                       (-> UserService
                           (.fireunreadnotifications js/localStorage.userid)
                           (.then (fn [response]
                                    (println "getunreadnotifications")

                                    )))
                                            ))






    (.$on $rootScope "firechatarrived" (fn [event res]
                                       (if res.data.ischating
                                         (.alert $ionicPopup (obj :title "连接提示" :template "对方忙"))
                                         (.makeconnect js/chatframe.autoconnect res.data.toid)
                                         )



                                            ))



  )


  )

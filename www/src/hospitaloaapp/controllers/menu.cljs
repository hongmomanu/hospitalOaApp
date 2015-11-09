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


  (def.service starter.MenuService [$http]
  (obj
    :sendalarm (fn [userid realname deptname]
                (-> $http
                  (.get (str js/serverurl "sendalarm") (obj :params
                                                            {:userid  userid :realname realname :deptname deptname}

                                                            ) )
                  (.then (fn [response] response))))




    ))





  (def.controller starter.controllers.MenuCtrl [$scope $sce MenuService MessageService $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "MenuCtrl")

    (! $scope.user (obj :deptname js/localStorage.deptname  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))


    (! $scope.alarmvoice (new js/Audio "sound/alarm.wav"))


   (! $scope.login (fn[]

                  (.$broadcast $rootScope "login")

                  ))

    (.$on $rootScope "updatemenu" (fn [event] (println "updatemenu")

                                    (! $scope.user (obj :deptname js/localStorage.deptname  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))

                                    ))


    (.$on $rootScope "firealarm" (fn [event data] (println "firealarm")


                                   (.show js/cordova.backgroundapp)

                                   (! $scope.alarmvoice.loop true)

                                   (.play $scope.alarmvoice)

                                   (! $scope.alarmuser data.data)

                                   (-> (.fromTemplateUrl  $ionicModal "templates/alarmmodal.html" (obj
                                                                                         :scope $scope
                                                                                         )) (.then  (fn [modal] (
                                                                                                                   ! $scope.alarmmodal modal
                                                                                                                   )
                                                                                                       (.show $scope.alarmmodal)

                                                                                                       )))



                                    ))


    (.$on $rootScope "firechatend" (fn [event] (println "firechatend")

                                     (when-not (nil? $scope.videochatmodal)

                                       (do

                                         (.remove $scope.videochatmodal)
                                         (set! js/isvideochating false)
                                          (! $scope.videochatmodal nil)

                                         )

                                       )



                                    ))



    (! $scope.sendalarm (fn[]


                          (-> MenuService
                           (.sendalarm js/localStorage.userid  js/localStorage.realname js/localStorage.deptname)
                           (.then (fn [response]


                                      (.alert $ionicPopup (obj :title "报警提示" :template response.data.message))


                                    )))



                          ))


     (! $scope.closevideomodel (fn[]


                                 (->
                                  $ionicPopup
                                  (.confirm (obj :title "温馨提示"
                                                           :template "你确定要退出此次通话么?"))
                                  (.then (fn [res]
                                           (if res (do

                                                     (-> MessageService
                           (.firechatend js/localStorage.userid $scope.chatfromid)
                           (.then (fn [response]))


                               )

                                                     (.remove $scope.videochatmodal)
                                 (set! js/isvideochating false)
                                 (! $scope.videochatmodal nil)



                                                     )


                                             (println "cancel")
                                             )


                                           ))
                                  )




                                ))


    (! $scope.closealarmmodal (fn[]
                                (.pause $scope.alarmvoice)

                                (.remove $scope.alarmmodal)

                                (! $scope.alarmmodal nil)


                                  )

         )



    (.$on $rootScope "firechatvideo" (fn [event res]


                                                (if (true? js/isvideochating)
                                                  (-> MessageService
                                            (.firechatarrived res.data.fromid res.data.toid true)
                                             (.then (fn [response]))


                               )(do

                                  (! $scope.videochaturl (.trustAsResourceUrl $sce (str js/videorurl "?handle=" res.data.toid)))
                                                (if (nil? $scope.videochatmodal) (-> (.fromTemplateUrl  $ionicModal "templates/videochatmodal.html" (obj
                                                                                         :scope $scope
                                                                                         )) (.then  (fn [modal] (
                                                                                                                   ! $scope.videochatmodal modal
                                                                                                                   )
                                                                                                       (.show $scope.videochatmodal)

                                                                                                       )))

                                             (.show $scope.videochatmodal)

                                             )
                                  (! $scope.chatfromid res.data.fromid)


                                          (set! js/isvideochating true)





                                       ($timeout (fn []

                                                   (-> MessageService
                                           (.firechatarrived res.data.fromid res.data.toid false)
                                             (.then (fn [response]))


                               )

                                                   ) 3500)

                                  )



                                                  )























                                            ))








  )


  )

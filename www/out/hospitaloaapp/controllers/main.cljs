(ns hospitaloaapp.controllers.main
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )





#_(defonce conn
    (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def serverurl "http://localhost:3000/")

;(def bankmap nil)
(def global-hub (atom {:markers []}))





(def.module starter.controllers [])


(def.service starter.MapService [$http]
  (obj
    :getbanksbytype (fn [type]
                (-> $http
                  (.post (str serverurl "getbanksbytype") (when-not (nil? type) (obj  :type  type  )))
                  (.then (fn [response] response))))


    ))


;;加载初始化控制器
(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout  $ionicLoading $compile MapService]

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

                      )))

(def.controller starter.controllers.PlaylistsCtrl [$scope]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  (! $scope.playlists (clj->js [
                                 { :title "Reggae"  :id 1 }
                                 { :title  "Chill"  :id 2 }
                                 { :title  "Dubstep" :id 3 }
                                 { :title  "Indie"  :id 4 }
                                 { :title  "Rap" :id 5 }
                                 { :title  "Cowbell" :id 6 }
                                 ]))

  ;;(println $scope.playlists)

  )
(def.controller starter.controllers.PlaylistCtrl [$scope $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  )




(println "Hello world initssssssss  sssssss!")




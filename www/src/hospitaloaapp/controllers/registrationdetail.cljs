(ns hospitaloaapp.controllers.registrationdetail
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.service starter.RegistrationDetailService [$http]
  (obj
    :getusersbyrid (fn [registrationid]
                (-> $http
                  (.get (str js/serverurl "getusersbyrid") (obj :params {:registrationid  registrationid }))
                  (.then (fn [response] response))))




    ))


  (def.controller starter.controllers.RegistrationDetailCtrl [$scope $stateParams RegistrationDetailService $ionicPopup  $ionicLoading $state RegistrationService]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))


    (! $scope.title $stateParams.registrationtitle)


    (! $scope.initdetais (fn []

                                  (-> RegistrationDetailService

                                      (.getusersbyrid  $stateParams.registrationid )


                                      (.then (fn [response]

                                        (! $scope.persons response.data)


                                    ))


                               )

                                (.$broadcast $scope "scroll.refreshComplete")






                                  )




       )


    ($scope.initdetais)








  )


  )

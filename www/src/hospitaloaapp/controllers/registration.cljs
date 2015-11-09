(ns hospitaloaapp.controllers.registration
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.service starter.RegistrationService [$http]
  (obj
    :getregistrationsIamin (fn [userid]
                (-> $http
                  (.get (str js/serverurl "getregistrationsiamin") (obj :params {:userid  userid }))
                  (.then (fn [response] response))))

   :getregistrationsImake (fn [userid]
                (-> $http
                  (.get (str js/serverurl "getregistrationsimake") (obj :params {:userid  userid }))
                  (.then (fn [response] response))))


   :addregistration (fn [userid title]

                      (-> $http
                  (.get (str js/serverurl "addregistration") (obj :params {:registrationtitle title :makeuserid userid}))
                  (.then (fn [response] response)))

                      )


    ))


  (def.controller starter.controllers.RegistrationCtrl [$scope RegistrationService $ionicPopup  $ionicLoading $state RegistrationService]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "RegistrationCtrl")

    (! $scope.data (obj ))


    (! $scope.initregistrations (fn []

                                  (-> RegistrationService
                           (.getregistrationsIamin  js/localStorage.userid )
                           (.then (fn [response]

                                  (! $scope.iamitems response.data)


                                    ))


                               )


       (-> RegistrationService
                           (.getregistrationsImake  js/localStorage.userid )
                           (.then (fn [response]

                                  (! $scope.imakeitems response.data)


                                    ))


                               )




                                  )




       )


    ($scope.initregistrations)



    (! $scope.newRegistration (fn[]
                                (println "newRegistration")

                                (.show $ionicPopup
                                       (obj :template "<input autofocus=\"autofocus\" type=\"text\" ng-model=\"data.newregistrationtitle\" />"
    :title "输入新签到名称"
    :subTitle  "请单击下面输入"
    :scope $scope
    :buttons (clj->js [
      { :text "取消" }
      {
        :text "<b>保存</b>"
        :type "button-positive"
        :onTap (fn [e] (if (or (nil? $scope.data.newregistrationtitle) (= "" $scope.data.newregistrationtitle) ) (
             .preventDefault e
          ) (do (println "ososo" $scope.data)

                   (-> RegistrationService
                           (.addregistration  js/localStorage.userid $scope.data.newregistrationtitle )
                           (.then (fn [response]

                                  (if (js->clj response.data.success)
                                      (do
                                        (println "data added success")

                                        ($scope.initregistrations)

                                        )
                                      (.alert $ionicPopup (obj :title "失败" :template "网络错误"))


                                      )


                                    ))


                               )

                   )

        )


                 )
      }
    ]
  )))


                                ))

    (! $scope.scanRegistration (fn[](println "scanRegistration")))


  )


  )

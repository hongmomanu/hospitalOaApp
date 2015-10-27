(ns hospitaloaapp.controllers.dept
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []


  (def.service starter.DeptService [$http]
  (obj
    :getusersbydeptid (fn [deptid]
                (-> $http
                  (.get (str js/serverurl "getusersbydeptid") (obj :params {:deptid  deptid}  ) )
                  (.then (fn [response] response))))


    ))

  (def.controller starter.controllers.DeptCtrl [$scope $stateParams $state $ionicLoading DeptService $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "DeptCtrl" $stateParams)




    (.show $ionicLoading (obj :template "加载中.."  :duration 3000))
    (-> DeptService
                           (.getusersbydeptid $stateParams.personId)
                           (.then (fn [response]
                                    (.hide $ionicLoading)

                                    ;(println (doall (map #(conj % {:title (:deptname %) }) response.data)))

                                    (println response.data)
                                     (! $scope.persons response.data)

                                    )))

  )


  )

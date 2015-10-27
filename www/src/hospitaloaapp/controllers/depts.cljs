(ns hospitaloaapp.controllers.depts
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.service starter.DeptsService [$http]
  (obj
    :getdepts (fn []
                (-> $http
                  (.get (str js/serverurl "getdepts") )
                  (.then (fn [response] response))))


    ))


  (def.controller starter.controllers.DeptsCtrl [$scope $ionicLoading $state DeptsService]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "messages")
    (.show $ionicLoading (obj :template "加载中.."  :duration 5000))
    (-> DeptsService
                           (.getdepts)
                           (.then (fn [response]
                                    (.hide $ionicLoading)

                                    ;(println (doall (map #(conj % {:title (:deptname %) }) response.data)))
                                     (! $scope.depts response.data)

                                    )))



    (! $scope.show_broad_chat (fn [deptname]

                                (println "show_broad_chat" deptname)
                                (.go $state "app.chatgroupinfo" (obj :deptId "1212" :deptName  deptname) )

                                ))



  )


  )

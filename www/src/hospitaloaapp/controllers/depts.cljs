(ns hospitaloaapp.controllers.depts
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []
  (def.controller starter.controllers.DeptsCtrl [$scope]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "messages")
    (! $scope.depts (clj->js [
                                 { :title "信息科"  :id 1 :persons 5 }
                                 { :title  "骨科"  :id 2  :persons 6 }
                                 { :title  "眼科" :id 3 :persons 3 }
                                 { :title  "儿科"  :id 4 :persons 2  }
                                 { :title  "口腔科" :id 5 :persons 1 }
                                 { :title  "妇科" :id 6 :persons 4 }
                                 ]))

    (! $scope.show_broad_chat (fn[] (

                                     println "show_broad_chat"

                                     )))



  )


  )

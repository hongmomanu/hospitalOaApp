(ns hospitaloaapp.controllers.main
  (:require [clojure.browser.repl :as repl]
            [hospitaloaapp.controllers.messages :as messages]
            [hospitaloaapp.controllers.message :as message ]
            [hospitaloaapp.controllers.depts :as depts]
            [hospitaloaapp.controllers.dept :as dept]
            [hospitaloaapp.controllers.user :as user]
            [hospitaloaapp.controllers.chatgroup :as chatgroup]
            )
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
#_(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout  $ionicLoading $compile MapService]

  )



(user/init)
(messages/init)
(message/init)
(depts/init)
(dept/init)
(chatgroup/init)
(println "Hello world initssssssss  sssssss!")




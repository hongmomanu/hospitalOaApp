(ns hospitaloaapp.controllers.main
  (:require [clojure.browser.repl :as repl]

            [hospitaloaapp.controllers.messages :as messages]
            [hospitaloaapp.controllers.message :as message ]
            [hospitaloaapp.controllers.depts :as depts]
            [hospitaloaapp.controllers.dept :as dept]
            [hospitaloaapp.controllers.registration :as registration]
            [hospitaloaapp.controllers.user :as user]
            [hospitaloaapp.controllers.menu :as menu]
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







(def.module starter.controllers [])





(menu/init)
(user/init)

(messages/init)
(message/init)
(depts/init)
(registration/init)
(dept/init)
(chatgroup/init)
(println "Hello world initssssssss  sssssss!")




(ns hospitaloaapp.controllers.websocket
  (:require [clojure.browser.repl :as repl]
            [hospitaloaapp.controllers.message :as messageobj ]
            [hospitaloaapp.controllers.chatgroup :as chatgroupobj ]
            [cljs.reader :as reader]
            )
  (:use [jayq.core :only [$ css html]]

        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(def serverurl js/serverurl)



(def socketurl (
                let [
                     oldport (clojure.string/join "" (drop 1 (re-find #":\d+" serverurl)))
                     oldtcp "http"
                     port  (+ 1 (reader/read-string oldport))
                     tcp "ws"
                     ]

                (->
                 serverurl
                 (clojure.string/replace  oldport port)
                 (clojure.string/replace  oldtcp tcp)
                 )


                ))





(defn init [$rootScope]

  (let [
        socket (new js/WebSocket socketurl)
        ]

    (println js/socket "hahha")
    (when-not (nil? js/socketobj) (.close js/socketobj))

    (set! js/socketobj socket)


    (! socket.onmessage (fn [event]
                          (let [
                                res (.parse js/JSON event.data)
                                ]

                          (println "websockty" res)
                          (case res.type
                            "message" (do
                                        (println res.data.mtype)
                                        (if (= res.data.mtype "person") (.$broadcast $rootScope "receivepmsg" res) (.$broadcast $rootScope "receivegmsg" res))


                                        (let [
                                              msgid (if (= res.data.mtype "person") res.data.fromid res.data.groupid)
                                              ]
                                          (aset js/newmessages msgid (.concat (if (nil? (aget js/newmessages msgid)) (clj->js []) (aget js/newmessages msgid))
                                                                              (clj->js [res])
                                                                              ))

                                          )





                                        (.$broadcast $rootScope "updatedeptpersons")

                                        (.$broadcast $rootScope "updatemsgnums")

                                        (.$broadcast $rootScope "showalerttip" res)


                                        (if (or (nil? res.data.groupid) (= "" res.data.groupid) )

                                          ( messageobj/makemessage res.data.fromid res.data.fromname $rootScope)

                                          ( chatgroupobj/makemessage res.data.groupid res.data.toname $rootScope) )



                                        )
                            "notification" (do (println "notification" res.data)

                                             (println "notificationnotification")
                                             (set! js/newnotifications (.concat js/newnotifications (clj->js [res])))
                                             (.$broadcast $rootScope "receivenotification" res)

                                             (.$broadcast $rootScope "updatenotificationnums")

                                             (.$broadcast $rootScope "showalerttip" res)


                                             )

                            "firechatvideo" (do (println res.data)

                                              (.$broadcast $rootScope "firechatvideo" res)

                                              )

                            "firechatarrived" (do (println res.data)

                                              (.$broadcast $rootScope "firechatarrived" res)

                                              )

                            "firechatend" (do (println res.data)

                                              (.$broadcast $rootScope "firechatend" res)

                                              )

                            "firealarm" (do (println res.data)

                                              (.$broadcast $rootScope "firealarm" res)

                                              )

                            "default")

                            )



                          ))

    (! socket.onclose (fn [event]

                        (println "closed")

                        ))

    (! socket.onopen (fn [event]

                        (println "opend")

                       (.send socket (js/JSON.stringify
                                       (clj->js {:userid js/localStorage.userid})))

                       (.$broadcast $rootScope "getunreadmsgs")
                       (.$broadcast $rootScope "getunreadnotifications")

                        ))



    (! socket.error (fn [event]

                        (println "error")

                        ))









    )







  )






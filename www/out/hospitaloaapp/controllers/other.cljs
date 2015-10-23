(ns hospitaloaapp.controllers.other
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []
  (def.controller starter.controllers.PlaylistsCtrl [$scope]
  ;;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
  (! $scope.playlists (clj->js [
                                 { :title "Reggaesss"  :id 1 }
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

  )



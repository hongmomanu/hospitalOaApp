(ns hospitaloaapp.controllers.notification
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []


  (def.service starter.NotificationService [$http]
  (obj
    :getnotificationhistory (fn [userid lasttime]

                 (-> $http
                  (.post (str js/serverurl "getnotificationhistory") (obj
                                                              :userid userid
                                                              :time lasttime))
                  (.then (fn [response] response))
                  (.catch (fn[response] response))

                    )

                 )

   :getdeptpersonstree (fn []

                 (-> $http
                  (.get (str js/serverurl "getdeptpersonstree") )
                  (.then (fn [response] response))
                  (.catch (fn[response] response))

                    )

                 )

   :addnotification (fn [content ftype fromid toids  fromname]
                (-> $http
                  (.post (str js/serverurl "addnotification") (obj :content content :ftype ftype
                                                              :fromid fromid :toids toids
                                                              :fromname fromname ))
                  (.then (fn [response] response))
                  (.catch (fn[response] response))

                    ))

   ))

  (def.controller starter.controllers.NotificationCtrl [$sce $ionicModal NotificationService $ionicActionSheet $scope FileUploader  $location $timeout $ionicPopup $ionicLoading   $rootScope $ionicScrollDelegate $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "NotificationCtrl")




    (! $scope.addimage (fn []
                         (.show $ionicActionSheet (obj :buttons [
                {:text  "<b>拍照</b>" }
                {:text  "<b>从图片库</b>" }
            ]
            :titleText "选择图片"
            :cancelOnStateChange false
            :cancelText "取消"
            :cancel (fn [] (println "cancel"))
            :buttonClicked (fn[index] (if (= index 0) ($scope.pictureView js/Camera.PictureSourceType.CAMERA)
                                         ($scope.pictureView js/Camera.PictureSourceType.PHOTOLIBRARY) )
                                true


                         )))))


    (! $scope.pictureView (fn [sourcetype]

                            (.getPicture js/navigator.camera
                                         (fn [fileurl]
                                           (let [
                                                 options (new js/FileUploadOptions)
                                                 ft (new js/FileTransfer)
                                                 ]
                                             (! options.fileKey "file")
                                             (! options.fileName (.substr fileurl (+ (.lastIndexOf fileurl "/") 1)))
                                             (.upload ft fileurl (js/encodeURI (str js/serverurl "uploadfile"))
                                                      (fn[suc](let [response (.parse js/JSON suc.response)]
                                                            (if response.success (do
                                                                                   (! $scope.messagetext (str "<img width=\"100%\" height=\"100%\"  src=\"" js/serverurl "files/"
                                                                               response.filename "\"></img>"))
                                                                                  ( $scope.addnotification "image")


                                                                                   ) (.alert $ionicPopup (obj :title "传输失败" :template "网络错误")))

                                                                )) (fn[err](.alert $ionicPopup (obj :title "传输失败" :template "网络错误"))) options )
                                             )



                                                               ) (fn [message] (.alert $ionicPopup (obj :title "获取图片失败" :template message))
                                                                               ) (obj :destinationType js/Camera.DestinationType.FILE_URI
                                                                                   :sourceType sourcetype
                                                                                   ))




                            ))




    (! $scope.captureUserMedia (fn [mediaConstraints successCallback errorCallback]



                                 (->
                                   js/navigator.mediaDevices
                                  (.getUserMedia mediaConstraints)
                                  (.then successCallback)
                                  (.catch errorCallback)
            )))

    (! $scope.mediasream nil)
    (! $scope.recordRTC nil)

    (! $scope.startrecordvoice (fn [](do


                              (println "startrecording")



                               (let [
                                     commonConfig (obj :onMediaCaptured (fn [stream]

                                                                          (println "onMediaCaptured")
                                                                          (! $scope.mediasream stream)
                                                                          (println stream $scope.mediasream)
                                                                          (! $scope.recordRTC (js/RecordRTC $scope.mediasream (obj :recorderType js/StereoAudioRecorder
                                                                                                                                   :type "audio"
                                                                                                                                   )))
                                                                          (.startRecording $scope.recordRTC )

                                                                          )
                                                       :onMediaStopped (fn[](println "onMediaStopped"))

                                                       :onMediaCapturingFailed (fn[error](println "onMediaCapturingFailed"))
                                                       )

                                     ]



                                 ( $scope.captureUserMedia (obj :audio true) (fn [audioStream]

                                                                                ;(println "audioStream" audioStream)
                                                                                ;(! $scope.mediasream audioStream)

                                                                               (commonConfig.onMediaCaptured audioStream)

                                                                                ;(! $scope.recordRTC (js/RecordRTC $scope.mediasream))

                                                                                ;(.startRecording $scope.recordRTC )


                                                                                )  (fn [error](println "error" error)
                                                                                     ;;(js/alert error)

                                                                                     ))




                                 )

                                (.show $ionicLoading (obj :template "正在录音,松开完成") )









                              )))


    (! $scope.stoprecordvoice (fn [](do

                               (.hide $ionicLoading)
                              (println "stoprecordvoice")
                              (.stopRecording $scope.recordRTC (fn [url]
                                                                 (println url)

                                                                 (let [blob $scope.recordRTC.blob
                                                                        fileType "audio"
                                                                        fileName "recording.wav"
                                                                        formData  (new js/FormData)

                                                                       ]
                                                                   (println  "blob" blob)
                                                                   (.append formData "filename" fileName)
                                                                   (.append formData "file" blob)
                                                                   (println  "hahahaha")


                                                                   ($scope.makeXMLHttpRequest (str js/serverurl "uploadfile") formData
                                                                                              (fn[type msg](
                                                                                                            if (= type 0)
                                                                                                            (.alert $ionicPopup (obj :title "发送失败" :template msg))
                                                                                                            (let [
                                                                                                                  response (.parse js/JSON msg)
                                                                                                                  ]

                                                                                                              (! $scope.messagetext (str "<audio width=\"100%\" height=\"100%\" preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>"))
                                                                                                              ( $scope.addnotification "audio")
                                                                                                              )


                                                                                                            )))

                                                                   )
                                                                 (.stop $scope.mediasream stop)

                                                                 ))


                              )))


    (! $scope.makeXMLHttpRequest (fn [url data callback] (let

                [request (new js/XMLHttpRequest)]

                (! request.onreadystatechange (fn[]

                                                (when (and (= request.readyState 4) (= request.status 200))

                                                  (callback 1  request.responseText)
                                                  )
                                                ))

                (! request.upload.onloadstart (fn[]

                                                  ;;(callback "Upload started...")

                                                ))

                (! request.upload.onprogress (fn[event]

                                                  ;;(callback (str "Upload Progress..." (.round js/Math (* (/ event.loaded  event.total)  100) )))

                                                ))




                 (! request.upload.onerror (fn[event]

                                                  (callback 0 "上传服务失败")

                                                ))



                (.open request "POST" url)


                (.send request data)
            )))



     (! $scope.uploader  (new FileUploader (obj :url (str js/serverurl "uploadfile"))))

    (println "FileUploader" $scope.uploader)
    (! $scope.progress 0)

    (! $scope.uploader.onAfterAddingFile  (fn [fileItem] (-> fileItem
                                                                (.upload )

                                                                )))



    (! $scope.uploader.onSuccessItem  (fn [fileItem response status headers]

                                        (println  response)
                                        ;;(js/JSON )
                                        (.hide $ionicLoading)

                                        (if response.success

                                          (do (case (.slice response.filetype 0 5)
                                          "video" (do  (println "video")
                                                    ($timeout (fn []
                                                                (! $scope.messagetext (str "<video width=\"100%\" height=\"100%\" preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></video>")

                                                                 )
                                                                ( $scope.addnotification "video")

                                                                ) 0 )




                                                    )

                                           "audio"  (do (println "audio")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<audio width=\"100%\" height=\"100%\" preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>")

                                                                 )
                                                                ( $scope.addnotification "audio")

                                                                ) 0 )
                                                      )

                                            "image" (do (println "image")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<img width=\"100%\" height=\"100%\"  src=\"" js/serverurl "files/"
                                                                               response.filename "\"></img>")

                                                                 )
                                                                ( $scope.addnotification "image")

                                                                ) 0 )

                                                      )

                                            (do (println "otherfiles")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<a   href=\"" js/serverurl "files/"
                                                                               response.filename "\">" response.name  "</a>")

                                                                 )
                                                                ( $scope.addnotification "otherfiles")

                                                                ) 0 )

                                                      ) ))

                                          (.alert $ionicPopup (obj :title "传输失败" :template "网络错误"))

                                          )


                                        ))






    (! $scope.uploader.onErrorItem  (fn [fileItem response status headers] (println "error"  response
                                                                (.hide $ionicLoading)
                                                                )))



    (! $scope.uploader.onProgressItem  (fn [fileItem progress]

                                          (! $scope.progress progress)
                                          (println $scope.progress)
                                          (.show $ionicLoading (obj :template (str "传输中..." $scope.progress "%")
                                                                    :animation "fade-in"
                                                                    :showBackdrop true

                                                                    :showDelay 0
                                                                    ))



                                          ))




    (! $scope.messagetext "")

    (! $scope.addfiles (fn [](do

                              ;(.trigger (js/$ "#groupmsgfiles") "click")

                              (.trigger (.element js/angular "#groupmsgfiles") "click")
                               (println "addfiles")


                              )))


    (.$on $scope "receivenotification" (fn [event data] (println "receivenotification")

                                     (when-not (= data.data.fromid data.data.toid)


                                                    ($timeout (fn[](do (.push $scope.messages (obj :time data.data.time  :content data.data.content :local false :realname
                                                                    (str "<a>" data.data.fromname (.date js/$.format (new js/Date data.data.time ) "M-dd hh:mm") "</a>")))
                                                              (println $scope.messages)

                                                              (.scrollBottom $ionicScrollDelegate true)

                                                              )) 0)








                                       )


                                            ))




    (! $scope.trustHtml (fn [htmlCode]

                         (
            .trustAsHtml $sce htmlCode
        )))




    (! $scope.topersons (clj->js [

    ]))


    (! $scope.getpersons (fn[]

                           (-> NotificationService
                           (.getdeptpersonstree)
                           (.then (fn [response]
                                    (! $scope.topersons response.data)))


                               )



                           ))


    ($scope.getpersons)

    (! $scope.showpersons (fn[]
            (if (nil? $scope.topersonsmodal) (-> (.fromTemplateUrl  $ionicModal "templates/notificationpersonsmodal.html" (obj :scope $scope
                                                                       )) (.then  (fn [modal] (
                                                                                                 ! $scope.topersonsmodal modal
                                                                                                 )
                                                                                     (.show $scope.topersonsmodal)

                                                                                     )))

                           (.show $scope.topersonsmodal)

                           )



                            ))


    (! $scope.closepersonsmodal(fn[]

                                 ;;(println $scope.topersons)
                                 (.hide $scope.topersonsmodal)

                                 ))


    (! $scope.getchecked (fn[]


                           (let [
                                 cljpersons (js->clj $scope.topersons)

                                 children (apply concat  (map #(into [] (get % "tree")) cljpersons))

                                 checkeds (filter (fn [x](and (get x "checked") (not= js/localStorage.userid (get x "id")) )) children)

                                 ]

                               (map #(get % "id") checkeds)

                             )

                           ))

    (! $scope.addnotification (fn [msgtype]

                           (println    ($scope.getchecked))
                           (if (or (nil? $scope.messagetext) (= $scope.messagetext ""))

                             (.alert $ionicPopup (obj :title "提示" :template "消息不能为空"))(let [toids (clj->js ($scope.getchecked))]
                                    (println toids)
                                    (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> NotificationService
                           (.addnotification (str "<p>" $scope.messagetext "</p>") msgtype js/localStorage.userid toids  js/localStorage.realname)
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.push $scope.messages (obj  :content (str "<p>"   $scope.messagetext "</p>") :local true :realname (str "<a>" js/localStorage.realname (.date js/$.format (new js/Date) "M-dd hh:mm") "</a>")))

                                        (println $scope.messages)

                                        (! $scope.messagetext "")

                                        (.scrollBottom $ionicScrollDelegate true)

                                        )
                                      (.alert $ionicPopup (obj :title "发送失败" :template "网络错误"))


                                      )


                                    ))


                               )
                                    )

                             )




                           ) )

    (! $scope.messages (clj->js [

  ]
       ))


    (let [msgs js/newnotifications ]
        (doall (map #(.$broadcast $scope "receivenotification" (clj->js %)) (js->clj msgs)))
         )


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (-> NotificationService
                           (.getnotificationhistory js/localStorage.userid  (if (nil? (first $scope.messages)) (.date js/$.format (new js/Date) "yyyy-M-ddTH:mm:ssZ") (aget (first $scope.messages) "time")) )
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (doall (map #(.unshift $scope.messages (obj :time (aget
                                                                                   (clj->js %)
                                                                                   "time"
                                                                                  )  :content (aget
                                                                                   (clj->js %)
                                                                                   "content"
                                                                                  ) :local (=(aget
                                                                                   (clj->js %)
                                                                                   "fromid"
                                                                                  ) js/localStorage.userid) :realname
                                                                    (str "<a>" (aget
                                                                                   (clj->js %)
                                                                                   "fromname"
                                                                                  ) (.date js/$.format (new js/Date (aget
                                                                                   (clj->js %)
                                                                                   "time"
                                                                                  ) ) "M-dd H:mm") "</a>"))) (js->clj response.data)))

                                    (.$broadcast $scope "scroll.refreshComplete")

                                    ))


                               )

                          ))



  )


  )



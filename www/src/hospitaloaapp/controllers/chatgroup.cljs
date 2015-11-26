(ns hospitaloaapp.controllers.chatgroup
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (def.controller starter.controllers.ChatGroupCtrl [$sce $ionicActionSheet $scope FileUploader  $location $timeout $ionicPopup $ionicLoading MessageService  $rootScope $ionicScrollDelegate $stateParams $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "ChatGroupCtrl" $stateParams)

    (! $scope.deptname $stateParams.deptName)


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

    (! $scope.showiosplay (fn[voiceurl]

                            (when (= js/window.device.platform "iOS")


                              (let [
                                    myMedia (new js/Media voiceurl)
                                    ]

                                (.play myMedia)
                                )


                              )

                            )

       )


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
                                                                                   (! $scope.messagetext (str "<img ng-click=\"showImages('" js/serverurl "files/"
                                                                               response.filename "')\" width=\"100%\" height=\"100%\"  src=\"" js/serverurl "files/"
                                                                               response.filename "\"></img>"))
                                                                                  ( $scope.addmessage "image")


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


    (! $scope.startrecordvoiceios (fn[]



                                    (js/window.requestFileSystem  js/LocalFileSystem.PERSISTENT  (* 5 1024 1024)
                                       (fn[fileSystem]
                                         ;(js/alert fileSystem)
                                         (js/resolveLocalFileSystemURL js/cordova.file.cacheDirectory
                                                                       (fn [dirEntry]
                                                                           (.getFile dirEntry "blank.wav" (obj :create true :exclusive false)
                             (fn[fileEntry]
                               ;(js/alert (.toInternalURL fileEntry)) toURL
                               (! $scope.voicerecordsrc (.toInternalURL fileEntry))
                               (! $scope.mediaRec  (new js/Media $scope.voicerecordsrc
                                                        (fn [] )
                                                        (fn[error]
                                                          (js/alert "mediaRecerror")
                                                          )))

                                (.startRecord $scope.mediaRec)


                               ) (fn[]))




                                                                                                      ))




                                                                                                  )

                                                                  (fn[]
                                                                              (js/alert "error")
                                                                                                       ))

                                    ))


    (! $scope.stoprecordvoiceios (fn[]

                                    (js/alert "iosend")

                                    (.stopRecord $scope.mediaRec)
                                    (.release $scope.mediaRec)
                                   (let [
                                                 options (new js/FileUploadOptions)
                                                 ft (new js/FileTransfer)
                                                 fileurl $scope.voicerecordsrc
                                                 ]
                                             (js/alert fileurl)
                                             (! options.fileKey "file")
                                             (! options.fileName (.substr fileurl (+ (.lastIndexOf fileurl "/") 1)))
                                             (.upload ft fileurl (js/encodeURI (str js/serverurl "uploadfile"))
                                                      (fn[suc](let [response (.parse js/JSON suc.response)]
                                                            (if response.success (do
                                                                                   (! $scope.messagetext (str "<audio  type=\"audio/wav\"  ng-click=\"showiosplay('" js/serverurl "files/"
                                                                               response.filename "')\"   controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>"))

                                                                                  ( $scope.addnotification "audio")


                                                                                   ) (.alert $ionicPopup (obj :title "传输失败" :template "网络错误")))

                                                                )) (fn[err](.alert $ionicPopup (obj :title "传输失败" :template "网络错误"))) options )
                                             )



                                    ))

    (! $scope.startrecordvoice (fn [](do


                              (println "startrecording")

                               (if (= js/window.device.platform "iOS")
                                   ($scope.startrecordvoiceios)

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

                                 )



                                (.show $ionicLoading (obj :template "正在录音,松开完成") )









                              )))


    (! $scope.stoprecordvoice (fn [](do

                               (.hide $ionicLoading)
                              (println "stoprecordvoice")
                              (if (= js/window.device.platform "iOS")

                                   ($scope.stoprecordvoiceios)
                                (.stopRecording $scope.recordRTC (fn [url]
                                                                 (println url)

                                                                 (let [blob $scope.recordRTC.blob
                                                                        fileType "audio"
                                                                        fileName "recording.wav"
                                                                        formData  (new js/FormData)

                                                                       ]

                                                                   (.append formData "filename" fileName)
                                                                   (.append formData "file" blob)



                                                                   ($scope.makeXMLHttpRequest (str js/serverurl "uploadfile") formData
                                                                                              (fn[type msg](
                                                                                                            if (= type 0)
                                                                                                            (.alert $ionicPopup (obj :title "发送失败" :template msg))
                                                                                                            (let [
                                                                                                                  response (.parse js/JSON msg)
                                                                                                                  ]

                                                                                                              (! $scope.messagetext (str "<audio  ng-click=\"showiosplay('" js/serverurl "files/"
                                                                               response.filename "')\"  preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>"))
                                                                                                              ( $scope.addmessage "audio")
                                                                                                              )


                                                                                                            )))

                                                                   )
                                                                 (.stop $scope.mediasream stop)

                                                                 ))

                                )



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
                                                                ( $scope.addmessage "video")

                                                                ) 0 )




                                                    )

                                           "audio"  (do (println "audio")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<audio  ng-click=\"showiosplay('" js/serverurl "files/"
                                                                               response.filename "')\"  preload=\"auto\"  controls=\"controls\" src=\"" js/serverurl "files/"
                                                                               response.filename "\"></audio>")

                                                                 )
                                                                ( $scope.addmessage "audio")

                                                                ) 0 )
                                                      )

                                            "image" (do (println "image")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<img ng-click=\"showImages('" js/serverurl "files/"
                                                                               response.filename "')\"     width=\"100%\" height=\"100%\"  src=\"" js/serverurl "files/"
                                                                               response.filename "\"></img>")

                                                                 )
                                                                ( $scope.addmessage "image")

                                                                ) 0 )

                                                      )

                                            (do (println "otherfiles")

                                                      ($timeout (fn []
                                                                (! $scope.messagetext (str "<a ng-click=\"openfile('" js/serverurl "files/"
                                                                               response.filename "')\" href=\"" js/serverurl "files/"
                                                                               response.filename "\">" response.name  "</a>")

                                                                 )
                                                                ( $scope.addmessage "otherfiles")

                                                                ) 0 )

                                                      ) ))

                                          (.alert $ionicPopup (obj :title "传输失败" :template "网络错误"))

                                          )


                                        ))




   (! $scope.openfile (fn[fileurl]

                     (.open js/cordova.plugins.disusered fileurl (fn[]) (fn[err] (js/alert err)))

                     ))


    (! $scope.showImages (fn[imageurl]

                           (! $scope.imagesrc imageurl)
                           (! $scope.zoomMin  1)
                           (-> (.fromTemplateUrl  $ionicModal (str js/localStorage.serverurl "client/" "templates/imagemodal.html") (obj :scope $scope
                                                                       )) (.then  (fn [modal] (
                                                                                                 ! $scope.imagemodal modal
                                                                                                 )
                                                                                     (.show $scope.imagemodal)

                                                                                     )))




                           )


       )

    (! $scope.closeimageModal(fn []
                               (.remove $scope.imagemodal)

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


    (.$on $scope "receivegmsg" (fn [event data] (println "receivegmsg" event data (= data.data.fromid data.data.toid))

                                     (when-not (= data.data.fromid data.data.toid)


                                                   (when (> (js->clj(-> $location
                                                       (.url)

                                                       (.indexOf data.data.groupid)

                                                       )) 0) ($timeout (fn[](do (.push $scope.messages (obj :time data.data.time  :content data.data.content :local false :realname
                                                                    (str "<a>" data.data.fromname (.date js/$.format (new js/Date data.data.time ) "M-dd hh:mm") "</a>")))
                                                              (println $scope.messages)
                                                              (aset js/newmessages data.data.groupid nil)
                                                              ;(.$broadcast $rootScope "updatedeptpersons")
                                                              (.$broadcast $rootScope "canceltip" data.data._id)
                                                              (.$broadcast $rootScope "updatemsgnums")
                                                              (.scrollBottom $ionicScrollDelegate true)



                                                              )) 0)

                                                     )






                                       )


                                            ))




    (! $scope.trustHtml (fn [htmlCode]

                         (
            .trustAsHtml $sce htmlCode
        )))





    (! $scope.addmessage (fn [msgtype]

                           (.show $ionicLoading (obj :template "传输中..."  :duration 5000))
                           (-> MessageService
                           (.addgroupmessage (str "<p>" $scope.messagetext "</p>") msgtype js/localStorage.userid $stateParams.deptId  $stateParams.deptId "group" $stateParams.deptName js/localStorage.realname)
                           (.then (fn [response]


                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.push $scope.messages (obj :time response.data.data.time :content (str "<p>"   $scope.messagetext "</p>") :local true :realname (str "<a>" js/localStorage.realname (.date js/$.format (new js/Date) "M-dd hh:mm") "</a>")))



                                        (! $scope.messagetext "")

                                        (makemessage $stateParams.deptId $stateParams.deptName $rootScope)

                                        (.scrollBottom $ionicScrollDelegate true)

                                        )
                                      (.alert $ionicPopup (obj :title "发送失败" :template "网络错误"))


                                      )


                                    ))


                               )


                           ) )

    (! $scope.messages (clj->js [

  ]
       ))


    (let [msgs (aget js/newmessages $stateParams.deptId)]
        (doall (map #(.$broadcast $scope "receivegmsg" (clj->js %)) (js->clj msgs)))
         )


    (! $scope.doRefresh (fn[]

                          (println "doRefresh")
                          (-> MessageService
                           (.getgroupmessagehistory js/localStorage.userid $stateParams.deptId  (if (nil? (first $scope.messages)) (.date js/$.format (new js/Date) "yyyy-M-ddTH:mm:ssZ") (aget (first $scope.messages) "time")) )
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

(defn makemessage [deptId deptName $rootScope]


  (println "newmessages group group group" deptId deptName)
  (let [

        message  (js->clj js/localStorage.messages)
        messages (if (nil? message) {} (js->clj (.parse js/JSON js/localStorage.messages)))


        deloldmessages (dissoc messages  deptId)

        newmessages (assoc deloldmessages (keyword deptId) {:type "group" :title deptName :id deptId})

        ]


    (! js/localStorage.messages (.stringify js/JSON (clj->js newmessages)))
      (.$broadcast $rootScope "messageslistupdate")

    )

  )

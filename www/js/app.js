// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var serverurl= localStorage.serverurl;
var videorurl="http://111.1.76.108:4450/";//Globle_Variable.serverurl.replace(/(:\d+)/g,":4450");
var socketobj=null;
var newmessages={};
var newnotifications=[];
var isvideochating=false;
 var audio_context;
var recorder;



angular.module('starter', ['ionic','angularFileUpload','mn','ion-tree-list', 'starter.controllers'])

.run(function($ionicPlatform,$ionicHistory,$interval) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)


    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if (window.device.platform === 'iOS') {
      cordova.plugins.iosrtc.registerGlobals();
    }

    cordova.plugins.backgroundMode.setDefaults(
      { title:'医院OA',
        ticker:'医院OA正在后台运行',
        text:'医院OA'
      }

    );
    cordova.plugins.backgroundMode.enable();


    document.addEventListener("resume", onResume, false);

    function onResume() {

        $.ajax({
                url: localStorage.serverurl+"hellohospitaloa",
                success: function(data){
                    //alert(1);
                },
                error:function(data){
                    //socketobj.close();
                     //alert("网络断开");
                },
                timeout: 3000
            });


    }


    /**
      setInterval(function () {

      //cordova.backgroundapp.show()

      }, 10000)**/




    $ionicPlatform.registerBackButtonAction(function(e) {
            e.preventDefault();


            if ($ionicHistory.backView()) {

                $ionicHistory.goBack(-1);
            } else {
                navigator.Backbutton.goHome(function() {
                //console.log('success')
               }, function() {
                //console.log('fail')
              });
            }
            return false;
        }, 101);



    /**
    cordova.plugins.notification.local.schedule({
    text: "我的消息提醒测试",
    at: 30000,
    led: "FF0000"
      });


    cordova.plugins.notification.local.on('trigger',function (notification) {

      try{
        cordova.backgroundapp.show()
        //cordova.fireDocumentEvent('resume');

        setTimeout(function(){alert(11);},5000);
      }catch(e){

        alert('exceptionfiring resume event from native')

      }



    }, this);

    **/



  });
})
.directive('compilehtml', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        return scope.$eval(attrs.compilehtml);
      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
   )};
  }])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('user', {
                url: '/login',
                //templateUrl: 'templates/loginfull.html',
                templateUrl: localStorage.serverurl+'client/'+'templates/loginfull.html?t='+(new Date().getTime()),
                controller: 'UserCtrl'
            })

    .state('app', {
    url: '/app',
    abstract: true,
    //templateUrl: 'templates/menu.html',
      templateUrl: localStorage.serverurl+'client/'+'templates/menu.html?t='+(new Date().getTime()),
    controller: 'MenuCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        //templateUrl: 'templates/search.html'
        templateUrl: localStorage.serverurl+'client/'+'templates/search.html?t='+(new Date().getTime())
      }
    }
  })

  .state('app.depts', {
    url: '/depts',
    views: {
      'menuContent': {
        //templateUrl: 'templates/depts.html',
        templateUrl: localStorage.serverurl+'client/'+'templates/depts.html?t='+(new Date().getTime()),
        controller: 'DeptsCtrl'
      }
    }
  })

   .state('app.deptperson', {
     url: '/depts/:deptId/:deptName',
      //cache: true,
      views: {
        'menuContent': {
          //templateUrl: 'templates/deptpersons.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/deptpersons.html?t='+(new Date().getTime()),
          controller: 'DeptCtrl'
        }
      }
    })

  .state('app.notification', {
      url: '/notification',
      views: {
        'menuContent': {
          //templateUrl: 'templates/notification.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/notification.html?t='+(new Date().getTime()),
          controller: 'NotificationCtrl'
        }
      }
    })

  .state('app.registration', {
      url: '/registration',
      views: {
        'menuContent': {
          //templateUrl: 'templates/registration.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/registration.html?t='+(new Date().getTime()),
          controller: 'RegistrationCtrl'
        }
      }
    })

  .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          //templateUrl: 'templates/setting.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/setting.html?t='+(new Date().getTime()),
          controller: 'SettingCtrl'
        }
      }
    })

  .state('app.registrationdetail', {
    url: '/registration/:registrationid/:registrationtitle',
      views: {
        'menuContent': {
          //templateUrl: 'templates/registrationdetail.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/registrationdetail.html?t='+(new Date().getTime()),
          controller: 'RegistrationDetailCtrl'
        }
      }
    })
    .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          //templateUrl: 'templates/messages.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/messages.html?t='+(new Date().getTime()),
          controller: 'MessagesCtrl'
        }
      }
    })

  .state('app.chatgroupinfo', {
    url: '/chats/group/:deptId:deptName',
      views: {
        'menuContent': {
          //templateUrl: 'templates/chatgroupinfo.html',
          templateUrl: localStorage.serverurl+'client/'+'templates/chatgroupinfo.html?t='+(new Date().getTime()),
          controller: 'ChatGroupCtrl'
        }
      }
    })


  .state('app.chatsingleinfo', {
    url: '/chats/sigle/:messageId/:title',
    //cache: true,
    views: {
      'menuContent': {
        //templateUrl: 'templates/message.html',
        templateUrl: localStorage.serverurl+'client/'+'templates/message.html?t='+(new Date().getTime()),
        controller: 'MessageCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/messages');
  $urlRouterProvider.otherwise('/login');
});

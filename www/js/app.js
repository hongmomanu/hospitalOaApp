// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var serverurl= "http://192.168.2.100:3000/"
var videorurl="http://111.1.76.108:4450/";//Globle_Variable.serverurl.replace(/(:\d+)/g,":4450");
var socketobj=null;
var newmessages={};
var newnotifications=[];
var isvideochating=false;
 var audio_context;
var recorder;



angular.module('starter', ['ionic','angularFileUpload','mn','ion-tree-list', 'starter.controllers'])

.run(function($ionicPlatform,$ionicHistory) {
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

    cordova.plugins.backgroundMode.setDefaults(
      { title:'医院OA',
        ticker:'医院OA正在后台运行',
        text:'医院OA'
      }

    )
    cordova.plugins.backgroundMode.enable();




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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('user', {
                url: '/login',
                templateUrl: 'templates/loginfull.html',
                //templateUrl: localStorage.serverurl + 'templates/login.html?t=' + (new Date().getTime()),
                controller: 'UserCtrl'
            })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.depts', {
    url: '/depts',
    views: {
      'menuContent': {
        templateUrl: 'templates/depts.html',
        controller: 'DeptsCtrl'
      }
    }
  })

   .state('app.deptperson', {
     url: '/depts/:deptId/:deptName',
      //cache: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/deptpersons.html',
          controller: 'DeptCtrl'
        }
      }
    })

  .state('app.notification', {
      url: '/notification',
      views: {
        'menuContent': {
          templateUrl: 'templates/notification.html',
          controller: 'NotificationCtrl'
        }
      }
    })

  .state('app.registration', {
      url: '/registration',
      views: {
        'menuContent': {
          templateUrl: 'templates/registration.html',
          controller: 'RegistrationCtrl'
        }
      }
    })

  .state('app.registrationdetail', {
    url: '/registration/:registrationid/:registrationtitle',
      views: {
        'menuContent': {
          templateUrl: 'templates/registrationdetail.html',
          controller: 'RegistrationDetailCtrl'
        }
      }
    })
    .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          templateUrl: 'templates/messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })

  .state('app.chatgroupinfo', {
    url: '/chats/group/:deptId:deptName',
      views: {
        'menuContent': {
          templateUrl: 'templates/chatgroupinfo.html',
          controller: 'ChatGroupCtrl'
        }
      }
    })


  .state('app.chatsingleinfo', {
    url: '/chats/sigle/:messageId/:title',
    //cache: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html',
        controller: 'MessageCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/messages');
  $urlRouterProvider.otherwise('/login');
});

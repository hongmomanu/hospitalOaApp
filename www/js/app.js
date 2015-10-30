// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var serverurl= "http://192.168.2.100:3000/"
var socketobj=null;
var newmessages={};

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
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

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
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

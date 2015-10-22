// Compiled by ClojureScript 1.7.48 {}
goog.provide('hospitaloaapp.controllers.main');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
hospitaloaapp.controllers.main.serverurl = "http://localhost:3000/";
hospitaloaapp.controllers.main.global_hub = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentVector.EMPTY], null));
hospitaloaapp.controllers.main.starter_controllers = angular.module("starter.controllers",[]);
hospitaloaapp.controllers.main.starter_MapService = ["$http",(function ($http){
var G__6713 = {};
(G__6713["getbanksbytype"] = ((function (G__6713){
return (function (type){
return $http.post([cljs.core.str(hospitaloaapp.controllers.main.serverurl),cljs.core.str("getbanksbytype")].join(''),(((type == null))?null:(function (){var G__6717 = {};
(G__6717["type"] = type);

return G__6717;
})())).then(((function (G__6713){
return (function (response){
return response;
});})(G__6713))
);
});})(G__6713))
);

return G__6713;
})];

angular.module("starter").service("MapService",hospitaloaapp.controllers.main.starter_MapService);
hospitaloaapp.controllers.main.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout","$ionicLoading","$compile","MapService",(function ($scope,$ionicModal,$timeout,$ionicLoading,$compile,MapService){
var o_SHARP__6721 = $scope;
(o_SHARP__6721["loginData"] = cljs.core.PersistentArrayMap.EMPTY);


$ionicModal.fromTemplateUrl("templates/login.html",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),$scope], null))).then((function (modal){
var o_SHARP_ = $scope;
(o_SHARP_["modal"] = modal);

return o_SHARP_;
}));

var o_SHARP__6722 = $scope;
(o_SHARP__6722["closeLogin"] = ((function (o_SHARP__6722){
return (function (){
return ($scope["modal"]).hide();
});})(o_SHARP__6722))
);


var o_SHARP__6723 = $scope;
(o_SHARP__6723["login"] = ((function (o_SHARP__6723){
return (function (){
return ($scope["modal"]).show();
});})(o_SHARP__6723))
);


var o_SHARP_ = $scope;
(o_SHARP_["doLogin"] = ((function (o_SHARP_){
return (function (){
return $timeout.call(null,((function (o_SHARP_){
return (function (){
return $scope.closeLogin();
});})(o_SHARP_))
,(1000));
});})(o_SHARP_))
);

return o_SHARP_;
})];

angular.module("starter.controllers").controller("AppCtrl",hospitaloaapp.controllers.main.starter_controllers_AppCtrl);
hospitaloaapp.controllers.main.starter_controllers_PlaylistsCtrl = ["$scope",(function ($scope){
var o_SHARP_ = $scope;
(o_SHARP_["playlists"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reggae",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Chill",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Dubstep",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Indie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Rap",new cljs.core.Keyword(null,"id","id",-1388402092),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Cowbell",new cljs.core.Keyword(null,"id","id",-1388402092),(6)], null)], null)));

return o_SHARP_;
})];

angular.module("starter.controllers").controller("PlaylistsCtrl",hospitaloaapp.controllers.main.starter_controllers_PlaylistsCtrl);
hospitaloaapp.controllers.main.starter_controllers_PlaylistCtrl = ["$scope","$stateParams","$compile",(function ($scope,$stateParams,$compile){
return null;
})];

angular.module("starter.controllers").controller("PlaylistCtrl",hospitaloaapp.controllers.main.starter_controllers_PlaylistCtrl);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");

//# sourceMappingURL=main.js.map
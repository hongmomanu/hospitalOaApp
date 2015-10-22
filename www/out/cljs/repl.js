// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7308_7322 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7309_7323 = null;
var count__7310_7324 = (0);
var i__7311_7325 = (0);
while(true){
if((i__7311_7325 < count__7310_7324)){
var f_7326 = cljs.core._nth.call(null,chunk__7309_7323,i__7311_7325);
cljs.core.println.call(null,"  ",f_7326);

var G__7327 = seq__7308_7322;
var G__7328 = chunk__7309_7323;
var G__7329 = count__7310_7324;
var G__7330 = (i__7311_7325 + (1));
seq__7308_7322 = G__7327;
chunk__7309_7323 = G__7328;
count__7310_7324 = G__7329;
i__7311_7325 = G__7330;
continue;
} else {
var temp__4425__auto___7331 = cljs.core.seq.call(null,seq__7308_7322);
if(temp__4425__auto___7331){
var seq__7308_7332__$1 = temp__4425__auto___7331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7308_7332__$1)){
var c__4990__auto___7333 = cljs.core.chunk_first.call(null,seq__7308_7332__$1);
var G__7334 = cljs.core.chunk_rest.call(null,seq__7308_7332__$1);
var G__7335 = c__4990__auto___7333;
var G__7336 = cljs.core.count.call(null,c__4990__auto___7333);
var G__7337 = (0);
seq__7308_7322 = G__7334;
chunk__7309_7323 = G__7335;
count__7310_7324 = G__7336;
i__7311_7325 = G__7337;
continue;
} else {
var f_7338 = cljs.core.first.call(null,seq__7308_7332__$1);
cljs.core.println.call(null,"  ",f_7338);

var G__7339 = cljs.core.next.call(null,seq__7308_7332__$1);
var G__7340 = null;
var G__7341 = (0);
var G__7342 = (0);
seq__7308_7322 = G__7339;
chunk__7309_7323 = G__7340;
count__7310_7324 = G__7341;
i__7311_7325 = G__7342;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7343 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7343);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7343)))?cljs.core.second.call(null,arglists_7343):arglists_7343));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7313 = null;
var count__7314 = (0);
var i__7315 = (0);
while(true){
if((i__7315 < count__7314)){
var vec__7316 = cljs.core._nth.call(null,chunk__7313,i__7315);
var name = cljs.core.nth.call(null,vec__7316,(0),null);
var map__7317 = cljs.core.nth.call(null,vec__7316,(1),null);
var map__7317__$1 = ((((!((map__7317 == null)))?((((map__7317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7317):map__7317);
var doc = cljs.core.get.call(null,map__7317__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7317__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7344 = seq__7312;
var G__7345 = chunk__7313;
var G__7346 = count__7314;
var G__7347 = (i__7315 + (1));
seq__7312 = G__7344;
chunk__7313 = G__7345;
count__7314 = G__7346;
i__7315 = G__7347;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7312);
if(temp__4425__auto__){
var seq__7312__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7312__$1)){
var c__4990__auto__ = cljs.core.chunk_first.call(null,seq__7312__$1);
var G__7348 = cljs.core.chunk_rest.call(null,seq__7312__$1);
var G__7349 = c__4990__auto__;
var G__7350 = cljs.core.count.call(null,c__4990__auto__);
var G__7351 = (0);
seq__7312 = G__7348;
chunk__7313 = G__7349;
count__7314 = G__7350;
i__7315 = G__7351;
continue;
} else {
var vec__7319 = cljs.core.first.call(null,seq__7312__$1);
var name = cljs.core.nth.call(null,vec__7319,(0),null);
var map__7320 = cljs.core.nth.call(null,vec__7319,(1),null);
var map__7320__$1 = ((((!((map__7320 == null)))?((((map__7320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7320):map__7320);
var doc = cljs.core.get.call(null,map__7320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7352 = cljs.core.next.call(null,seq__7312__$1);
var G__7353 = null;
var G__7354 = (0);
var G__7355 = (0);
seq__7312 = G__7352;
chunk__7313 = G__7353;
count__7314 = G__7354;
i__7315 = G__7355;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
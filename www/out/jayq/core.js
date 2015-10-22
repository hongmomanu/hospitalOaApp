// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(){
var args6726 = [];
var len__5245__auto___6729 = arguments.length;
var i__5246__auto___6730 = (0);
while(true){
if((i__5246__auto___6730 < len__5245__auto___6729)){
args6726.push((arguments[i__5246__auto___6730]));

var G__6731 = (i__5246__auto___6730 + (1));
i__5246__auto___6730 = G__6731;
continue;
} else {
}
break;
}

var G__6728 = args6726.length;
switch (G__6728) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6726.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4206__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__6734 = null;
var G__6734__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6734__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6734 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6734__2.call(this,self__,k);
case 3:
return G__6734__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6734.cljs$core$IFn$_invoke$arity$2 = G__6734__2;
G__6734.cljs$core$IFn$_invoke$arity$3 = G__6734__3;
return G__6734;
})()
;

jQuery.prototype.apply = (function (self__,args6733){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6733)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(){
var args__5252__auto__ = [];
var len__5245__auto___6740 = arguments.length;
var i__5246__auto___6741 = (0);
while(true){
if((i__5246__auto___6741 < len__5245__auto___6740)){
args__5252__auto__.push((arguments[i__5246__auto___6741]));

var G__6742 = (i__5246__auto___6741 + (1));
i__5246__auto___6741 = G__6742;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__6738){
var vec__6739 = p__6738;
var speed = cljs.core.nth.call(null,vec__6739,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6739,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq6735){
var G__6736 = cljs.core.first.call(null,seq6735);
var seq6735__$1 = cljs.core.next.call(null,seq6735);
var G__6737 = cljs.core.first.call(null,seq6735__$1);
var seq6735__$2 = cljs.core.next.call(null,seq6735__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__6736,G__6737,seq6735__$2);
});
jayq.core.text = (function jayq$core$text(){
var args6743 = [];
var len__5245__auto___6746 = arguments.length;
var i__5246__auto___6747 = (0);
while(true){
if((i__5246__auto___6747 < len__5245__auto___6746)){
args6743.push((arguments[i__5246__auto___6747]));

var G__6748 = (i__5246__auto___6747 + (1));
i__5246__auto___6747 = G__6748;
continue;
} else {
}
break;
}

var G__6745 = args6743.length;
switch (G__6745) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6743.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(){
var args6750 = [];
var len__5245__auto___6753 = arguments.length;
var i__5246__auto___6754 = (0);
while(true){
if((i__5246__auto___6754 < len__5245__auto___6753)){
args6750.push((arguments[i__5246__auto___6754]));

var G__6755 = (i__5246__auto___6754 + (1));
i__5246__auto___6754 = G__6755;
continue;
} else {
}
break;
}

var G__6752 = args6750.length;
switch (G__6752) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6750.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(){
var args6757 = [];
var len__5245__auto___6760 = arguments.length;
var i__5246__auto___6761 = (0);
while(true){
if((i__5246__auto___6761 < len__5245__auto___6760)){
args6757.push((arguments[i__5246__auto___6761]));

var G__6762 = (i__5246__auto___6761 + (1));
i__5246__auto___6761 = G__6762;
continue;
} else {
}
break;
}

var G__6759 = args6757.length;
switch (G__6759) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6757.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(){
var args6764 = [];
var len__5245__auto___6767 = arguments.length;
var i__5246__auto___6768 = (0);
while(true){
if((i__5246__auto___6768 < len__5245__auto___6767)){
args6764.push((arguments[i__5246__auto___6768]));

var G__6769 = (i__5246__auto___6768 + (1));
i__5246__auto___6768 = G__6769;
continue;
} else {
}
break;
}

var G__6766 = args6764.length;
switch (G__6766) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6764.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(){
var args6771 = [];
var len__5245__auto___6774 = arguments.length;
var i__5246__auto___6775 = (0);
while(true){
if((i__5246__auto___6775 < len__5245__auto___6774)){
args6771.push((arguments[i__5246__auto___6775]));

var G__6776 = (i__5246__auto___6775 + (1));
i__5246__auto___6775 = G__6776;
continue;
} else {
}
break;
}

var G__6773 = args6771.length;
switch (G__6773) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6771.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(){
var args6778 = [];
var len__5245__auto___6781 = arguments.length;
var i__5246__auto___6782 = (0);
while(true){
if((i__5246__auto___6782 < len__5245__auto___6781)){
args6778.push((arguments[i__5246__auto___6782]));

var G__6783 = (i__5246__auto___6782 + (1));
i__5246__auto___6782 = G__6783;
continue;
} else {
}
break;
}

var G__6780 = args6778.length;
switch (G__6780) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6778.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(){
var args6785 = [];
var len__5245__auto___6788 = arguments.length;
var i__5246__auto___6789 = (0);
while(true){
if((i__5246__auto___6789 < len__5245__auto___6788)){
args6785.push((arguments[i__5246__auto___6789]));

var G__6790 = (i__5246__auto___6789 + (1));
i__5246__auto___6789 = G__6790;
continue;
} else {
}
break;
}

var G__6787 = args6785.length;
switch (G__6787) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6785.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(){
var args__5252__auto__ = [];
var len__5245__auto___6796 = arguments.length;
var i__5246__auto___6797 = (0);
while(true){
if((i__5246__auto___6797 < len__5245__auto___6796)){
args__5252__auto__.push((arguments[i__5246__auto___6797]));

var G__6798 = (i__5246__auto___6797 + (1));
i__5246__auto___6797 = G__6798;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6794){
var vec__6795 = p__6794;
var speed = cljs.core.nth.call(null,vec__6795,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6795,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq6792){
var G__6793 = cljs.core.first.call(null,seq6792);
var seq6792__$1 = cljs.core.next.call(null,seq6792);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__6793,seq6792__$1);
});
jayq.core.show = (function jayq$core$show(){
var args__5252__auto__ = [];
var len__5245__auto___6803 = arguments.length;
var i__5246__auto___6804 = (0);
while(true){
if((i__5246__auto___6804 < len__5245__auto___6803)){
args__5252__auto__.push((arguments[i__5246__auto___6804]));

var G__6805 = (i__5246__auto___6804 + (1));
i__5246__auto___6804 = G__6805;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6801){
var vec__6802 = p__6801;
var speed = cljs.core.nth.call(null,vec__6802,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6802,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq6799){
var G__6800 = cljs.core.first.call(null,seq6799);
var seq6799__$1 = cljs.core.next.call(null,seq6799);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__6800,seq6799__$1);
});
jayq.core.toggle = (function jayq$core$toggle(){
var args__5252__auto__ = [];
var len__5245__auto___6810 = arguments.length;
var i__5246__auto___6811 = (0);
while(true){
if((i__5246__auto___6811 < len__5245__auto___6810)){
args__5252__auto__.push((arguments[i__5246__auto___6811]));

var G__6812 = (i__5246__auto___6811 + (1));
i__5246__auto___6811 = G__6812;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6808){
var vec__6809 = p__6808;
var speed = cljs.core.nth.call(null,vec__6809,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6809,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq6806){
var G__6807 = cljs.core.first.call(null,seq6806);
var seq6806__$1 = cljs.core.next.call(null,seq6806);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__6807,seq6806__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(){
var args__5252__auto__ = [];
var len__5245__auto___6817 = arguments.length;
var i__5246__auto___6818 = (0);
while(true){
if((i__5246__auto___6818 < len__5245__auto___6817)){
args__5252__auto__.push((arguments[i__5246__auto___6818]));

var G__6819 = (i__5246__auto___6818 + (1));
i__5246__auto___6818 = G__6819;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6815){
var vec__6816 = p__6815;
var speed = cljs.core.nth.call(null,vec__6816,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6816,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq6813){
var G__6814 = cljs.core.first.call(null,seq6813);
var seq6813__$1 = cljs.core.next.call(null,seq6813);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__6814,seq6813__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(){
var args__5252__auto__ = [];
var len__5245__auto___6824 = arguments.length;
var i__5246__auto___6825 = (0);
while(true){
if((i__5246__auto___6825 < len__5245__auto___6824)){
args__5252__auto__.push((arguments[i__5246__auto___6825]));

var G__6826 = (i__5246__auto___6825 + (1));
i__5246__auto___6825 = G__6826;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6822){
var vec__6823 = p__6822;
var speed = cljs.core.nth.call(null,vec__6823,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6823,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq6820){
var G__6821 = cljs.core.first.call(null,seq6820);
var seq6820__$1 = cljs.core.next.call(null,seq6820);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__6821,seq6820__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(){
var args__5252__auto__ = [];
var len__5245__auto___6831 = arguments.length;
var i__5246__auto___6832 = (0);
while(true){
if((i__5246__auto___6832 < len__5245__auto___6831)){
args__5252__auto__.push((arguments[i__5246__auto___6832]));

var G__6833 = (i__5246__auto___6832 + (1));
i__5246__auto___6832 = G__6833;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6829){
var vec__6830 = p__6829;
var speed = cljs.core.nth.call(null,vec__6830,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6830,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq6827){
var G__6828 = cljs.core.first.call(null,seq6827);
var seq6827__$1 = cljs.core.next.call(null,seq6827);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__6828,seq6827__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(){
var args__5252__auto__ = [];
var len__5245__auto___6838 = arguments.length;
var i__5246__auto___6839 = (0);
while(true){
if((i__5246__auto___6839 < len__5245__auto___6838)){
args__5252__auto__.push((arguments[i__5246__auto___6839]));

var G__6840 = (i__5246__auto___6839 + (1));
i__5246__auto___6839 = G__6840;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6836){
var vec__6837 = p__6836;
var speed = cljs.core.nth.call(null,vec__6837,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6837,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq6834){
var G__6835 = cljs.core.first.call(null,seq6834);
var seq6834__$1 = cljs.core.next.call(null,seq6834);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__6835,seq6834__$1);
});
jayq.core.siblings = (function jayq$core$siblings(){
var args6841 = [];
var len__5245__auto___6844 = arguments.length;
var i__5246__auto___6845 = (0);
while(true){
if((i__5246__auto___6845 < len__5245__auto___6844)){
args6841.push((arguments[i__5246__auto___6845]));

var G__6846 = (i__5246__auto___6845 + (1));
i__5246__auto___6845 = G__6846;
continue;
} else {
}
break;
}

var G__6843 = args6841.length;
switch (G__6843) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6841.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(){
var args6848 = [];
var len__5245__auto___6851 = arguments.length;
var i__5246__auto___6852 = (0);
while(true){
if((i__5246__auto___6852 < len__5245__auto___6851)){
args6848.push((arguments[i__5246__auto___6852]));

var G__6853 = (i__5246__auto___6852 + (1));
i__5246__auto___6852 = G__6853;
continue;
} else {
}
break;
}

var G__6850 = args6848.length;
switch (G__6850) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6848.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(){
var args6855 = [];
var len__5245__auto___6858 = arguments.length;
var i__5246__auto___6859 = (0);
while(true){
if((i__5246__auto___6859 < len__5245__auto___6858)){
args6855.push((arguments[i__5246__auto___6859]));

var G__6860 = (i__5246__auto___6859 + (1));
i__5246__auto___6859 = G__6860;
continue;
} else {
}
break;
}

var G__6857 = args6855.length;
switch (G__6857) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6855.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(){
var args6862 = [];
var len__5245__auto___6865 = arguments.length;
var i__5246__auto___6866 = (0);
while(true){
if((i__5246__auto___6866 < len__5245__auto___6865)){
args6862.push((arguments[i__5246__auto___6866]));

var G__6867 = (i__5246__auto___6866 + (1));
i__5246__auto___6866 = G__6867;
continue;
} else {
}
break;
}

var G__6864 = args6862.length;
switch (G__6864) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6862.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(){
var args6869 = [];
var len__5245__auto___6872 = arguments.length;
var i__5246__auto___6873 = (0);
while(true){
if((i__5246__auto___6873 < len__5245__auto___6872)){
args6869.push((arguments[i__5246__auto___6873]));

var G__6874 = (i__5246__auto___6873 + (1));
i__5246__auto___6873 = G__6874;
continue;
} else {
}
break;
}

var G__6871 = args6869.length;
switch (G__6871) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6869.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(){
var args6876 = [];
var len__5245__auto___6879 = arguments.length;
var i__5246__auto___6880 = (0);
while(true){
if((i__5246__auto___6880 < len__5245__auto___6879)){
args6876.push((arguments[i__5246__auto___6880]));

var G__6881 = (i__5246__auto___6880 + (1));
i__5246__auto___6880 = G__6881;
continue;
} else {
}
break;
}

var G__6878 = args6876.length;
switch (G__6878) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6876.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(){
var args6883 = [];
var len__5245__auto___6886 = arguments.length;
var i__5246__auto___6887 = (0);
while(true){
if((i__5246__auto___6887 < len__5245__auto___6886)){
args6883.push((arguments[i__5246__auto___6887]));

var G__6888 = (i__5246__auto___6887 + (1));
i__5246__auto___6887 = G__6888;
continue;
} else {
}
break;
}

var G__6885 = args6883.length;
switch (G__6885) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6883.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(){
var args6890 = [];
var len__5245__auto___6893 = arguments.length;
var i__5246__auto___6894 = (0);
while(true){
if((i__5246__auto___6894 < len__5245__auto___6893)){
args6890.push((arguments[i__5246__auto___6894]));

var G__6895 = (i__5246__auto___6894 + (1));
i__5246__auto___6894 = G__6895;
continue;
} else {
}
break;
}

var G__6892 = args6890.length;
switch (G__6892) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6890.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(){
var args6897 = [];
var len__5245__auto___6900 = arguments.length;
var i__5246__auto___6901 = (0);
while(true){
if((i__5246__auto___6901 < len__5245__auto___6900)){
args6897.push((arguments[i__5246__auto___6901]));

var G__6902 = (i__5246__auto___6901 + (1));
i__5246__auto___6901 = G__6902;
continue;
} else {
}
break;
}

var G__6899 = args6897.length;
switch (G__6899) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6897.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(){
var args6904 = [];
var len__5245__auto___6907 = arguments.length;
var i__5246__auto___6908 = (0);
while(true){
if((i__5246__auto___6908 < len__5245__auto___6907)){
args6904.push((arguments[i__5246__auto___6908]));

var G__6909 = (i__5246__auto___6908 + (1));
i__5246__auto___6908 = G__6909;
continue;
} else {
}
break;
}

var G__6906 = args6904.length;
switch (G__6906) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6904.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(){
var args__5252__auto__ = [];
var len__5245__auto___6916 = arguments.length;
var i__5246__auto___6917 = (0);
while(true){
if((i__5246__auto___6917 < len__5245__auto___6916)){
args__5252__auto__.push((arguments[i__5246__auto___6917]));

var G__6918 = (i__5246__auto___6917 + (1));
i__5246__auto___6917 = G__6918;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__6914){
var vec__6915 = p__6914;
var context = cljs.core.nth.call(null,vec__6915,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq6911){
var G__6912 = cljs.core.first.call(null,seq6911);
var seq6911__$1 = cljs.core.next.call(null,seq6911);
var G__6913 = cljs.core.first.call(null,seq6911__$1);
var seq6911__$2 = cljs.core.next.call(null,seq6911__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__6912,G__6913,seq6911__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(){
var args6919 = [];
var len__5245__auto___6922 = arguments.length;
var i__5246__auto___6923 = (0);
while(true){
if((i__5246__auto___6923 < len__5245__auto___6922)){
args6919.push((arguments[i__5246__auto___6923]));

var G__6924 = (i__5246__auto___6923 + (1));
i__5246__auto___6923 = G__6924;
continue;
} else {
}
break;
}

var G__6921 = args6919.length;
switch (G__6921) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6919.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(){
var args6926 = [];
var len__5245__auto___6929 = arguments.length;
var i__5246__auto___6930 = (0);
while(true){
if((i__5246__auto___6930 < len__5245__auto___6929)){
args6926.push((arguments[i__5246__auto___6930]));

var G__6931 = (i__5246__auto___6930 + (1));
i__5246__auto___6930 = G__6931;
continue;
} else {
}
break;
}

var G__6928 = args6926.length;
switch (G__6928) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6926.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(){
var args6933 = [];
var len__5245__auto___6936 = arguments.length;
var i__5246__auto___6937 = (0);
while(true){
if((i__5246__auto___6937 < len__5245__auto___6936)){
args6933.push((arguments[i__5246__auto___6937]));

var G__6938 = (i__5246__auto___6937 + (1));
i__5246__auto___6937 = G__6938;
continue;
} else {
}
break;
}

var G__6935 = args6933.length;
switch (G__6935) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6933.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(){
var args6940 = [];
var len__5245__auto___6943 = arguments.length;
var i__5246__auto___6944 = (0);
while(true){
if((i__5246__auto___6944 < len__5245__auto___6943)){
args6940.push((arguments[i__5246__auto___6944]));

var G__6945 = (i__5246__auto___6944 + (1));
i__5246__auto___6944 = G__6945;
continue;
} else {
}
break;
}

var G__6942 = args6940.length;
switch (G__6942) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6940.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__6949){
var map__6952 = p__6949;
var map__6952__$1 = ((((!((map__6952 == null)))?((((map__6952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6952):map__6952);
var request = map__6952__$1;
var data = cljs.core.get.call(null,map__6952__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__6952__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__6952,map__6952__$1,request,data,contentType){
return (function (p1__6948_SHARP_){
if(cljs.core.truth_((function (){var and__4194__auto__ = ct;
if(cljs.core.truth_(and__4194__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4194__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__6948_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__6948_SHARP_;
}
});})(ct,map__6952,map__6952__$1,request,data,contentType))
.call(null,((function (ct,map__6952,map__6952__$1,request,data,contentType){
return (function (p1__6947_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__6947_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__6947_SHARP_;
}
});})(ct,map__6952,map__6952__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(){
var args6954 = [];
var len__5245__auto___6957 = arguments.length;
var i__5246__auto___6958 = (0);
while(true){
if((i__5246__auto___6958 < len__5245__auto___6957)){
args6954.push((arguments[i__5246__auto___6958]));

var G__6959 = (i__5246__auto___6958 + (1));
i__5246__auto___6958 = G__6959;
continue;
} else {
}
break;
}

var G__6956 = args6954.length;
switch (G__6956) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6954.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__6961,content,callback){
var vec__6963 = p__6961;
var method = cljs.core.nth.call(null,vec__6963,(0),null);
var uri = cljs.core.nth.call(null,vec__6963,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(){
var args__5252__auto__ = [];
var len__5245__auto___6969 = arguments.length;
var i__5246__auto___6970 = (0);
while(true){
if((i__5246__auto___6970 < len__5245__auto___6969)){
args__5252__auto__.push((arguments[i__5246__auto___6970]));

var G__6971 = (i__5246__auto___6970 + (1));
i__5246__auto___6970 = G__6971;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__6967){
var vec__6968 = p__6967;
var func = cljs.core.nth.call(null,vec__6968,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq6964){
var G__6965 = cljs.core.first.call(null,seq6964);
var seq6964__$1 = cljs.core.next.call(null,seq6964);
var G__6966 = cljs.core.first.call(null,seq6964__$1);
var seq6964__$2 = cljs.core.next.call(null,seq6964__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__6965,G__6966,seq6964__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(){
var args__5252__auto__ = [];
var len__5245__auto___6977 = arguments.length;
var i__5246__auto___6978 = (0);
while(true){
if((i__5246__auto___6978 < len__5245__auto___6977)){
args__5252__auto__.push((arguments[i__5246__auto___6978]));

var G__6979 = (i__5246__auto___6978 + (1));
i__5246__auto___6978 = G__6979;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__6975){
var vec__6976 = p__6975;
var sel = cljs.core.nth.call(null,vec__6976,(0),null);
var data = cljs.core.nth.call(null,vec__6976,(1),null);
var handler = cljs.core.nth.call(null,vec__6976,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq6972){
var G__6973 = cljs.core.first.call(null,seq6972);
var seq6972__$1 = cljs.core.next.call(null,seq6972);
var G__6974 = cljs.core.first.call(null,seq6972__$1);
var seq6972__$2 = cljs.core.next.call(null,seq6972__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__6973,G__6974,seq6972__$2);
});
jayq.core.one = (function jayq$core$one(){
var args__5252__auto__ = [];
var len__5245__auto___6985 = arguments.length;
var i__5246__auto___6986 = (0);
while(true){
if((i__5246__auto___6986 < len__5245__auto___6985)){
args__5252__auto__.push((arguments[i__5246__auto___6986]));

var G__6987 = (i__5246__auto___6986 + (1));
i__5246__auto___6986 = G__6987;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__6983){
var vec__6984 = p__6983;
var sel = cljs.core.nth.call(null,vec__6984,(0),null);
var data = cljs.core.nth.call(null,vec__6984,(1),null);
var handler = cljs.core.nth.call(null,vec__6984,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq6980){
var G__6981 = cljs.core.first.call(null,seq6980);
var seq6980__$1 = cljs.core.next.call(null,seq6980);
var G__6982 = cljs.core.first.call(null,seq6980__$1);
var seq6980__$2 = cljs.core.next.call(null,seq6980__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__6981,G__6982,seq6980__$2);
});
jayq.core.off = (function jayq$core$off(){
var args__5252__auto__ = [];
var len__5245__auto___6993 = arguments.length;
var i__5246__auto___6994 = (0);
while(true){
if((i__5246__auto___6994 < len__5245__auto___6993)){
args__5252__auto__.push((arguments[i__5246__auto___6994]));

var G__6995 = (i__5246__auto___6994 + (1));
i__5246__auto___6994 = G__6995;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__6991){
var vec__6992 = p__6991;
var sel = cljs.core.nth.call(null,vec__6992,(0),null);
var handler = cljs.core.nth.call(null,vec__6992,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq6988){
var G__6989 = cljs.core.first.call(null,seq6988);
var seq6988__$1 = cljs.core.next.call(null,seq6988);
var G__6990 = cljs.core.first.call(null,seq6988__$1);
var seq6988__$2 = cljs.core.next.call(null,seq6988__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__6989,G__6990,seq6988__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(){
var args6996 = [];
var len__5245__auto___6999 = arguments.length;
var i__5246__auto___7000 = (0);
while(true){
if((i__5246__auto___7000 < len__5245__auto___6999)){
args6996.push((arguments[i__5246__auto___7000]));

var G__7001 = (i__5246__auto___7000 + (1));
i__5246__auto___7000 = G__7001;
continue;
} else {
}
break;
}

var G__6998 = args6996.length;
switch (G__6998) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6996.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(){
var args7003 = [];
var len__5245__auto___7006 = arguments.length;
var i__5246__auto___7007 = (0);
while(true){
if((i__5246__auto___7007 < len__5245__auto___7006)){
args7003.push((arguments[i__5246__auto___7007]));

var G__7008 = (i__5246__auto___7007 + (1));
i__5246__auto___7007 = G__7008;
continue;
} else {
}
break;
}

var G__7005 = args7003.length;
switch (G__7005) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7003.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(){
var args7010 = [];
var len__5245__auto___7013 = arguments.length;
var i__5246__auto___7014 = (0);
while(true){
if((i__5246__auto___7014 < len__5245__auto___7013)){
args7010.push((arguments[i__5246__auto___7014]));

var G__7015 = (i__5246__auto___7014 + (1));
i__5246__auto___7014 = G__7015;
continue;
} else {
}
break;
}

var G__7012 = args7010.length;
switch (G__7012) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7010.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(){
var args7017 = [];
var len__5245__auto___7020 = arguments.length;
var i__5246__auto___7021 = (0);
while(true){
if((i__5246__auto___7021 < len__5245__auto___7020)){
args7017.push((arguments[i__5246__auto___7021]));

var G__7022 = (i__5246__auto___7021 + (1));
i__5246__auto___7021 = G__7022;
continue;
} else {
}
break;
}

var G__7019 = args7017.length;
switch (G__7019) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7017.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(){
var args7024 = [];
var len__5245__auto___7027 = arguments.length;
var i__5246__auto___7028 = (0);
while(true){
if((i__5246__auto___7028 < len__5245__auto___7027)){
args7024.push((arguments[i__5246__auto___7028]));

var G__7029 = (i__5246__auto___7028 + (1));
i__5246__auto___7028 = G__7029;
continue;
} else {
}
break;
}

var G__7026 = args7024.length;
switch (G__7026) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7024.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(){
var args7031 = [];
var len__5245__auto___7034 = arguments.length;
var i__5246__auto___7035 = (0);
while(true){
if((i__5246__auto___7035 < len__5245__auto___7034)){
args7031.push((arguments[i__5246__auto___7035]));

var G__7036 = (i__5246__auto___7035 + (1));
i__5246__auto___7035 = G__7036;
continue;
} else {
}
break;
}

var G__7033 = args7031.length;
switch (G__7033) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7031.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(){
var args__5252__auto__ = [];
var len__5245__auto___7040 = arguments.length;
var i__5246__auto___7041 = (0);
while(true){
if((i__5246__auto___7041 < len__5245__auto___7040)){
args__5252__auto__.push((arguments[i__5246__auto___7041]));

var G__7042 = (i__5246__auto___7041 + (1));
i__5246__auto___7041 = G__7042;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq7038){
var G__7039 = cljs.core.first.call(null,seq7038);
var seq7038__$1 = cljs.core.next.call(null,seq7038);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__7039,seq7038__$1);
});
jayq.core.fail = (function jayq$core$fail(){
var args__5252__auto__ = [];
var len__5245__auto___7045 = arguments.length;
var i__5246__auto___7046 = (0);
while(true){
if((i__5246__auto___7046 < len__5245__auto___7045)){
args__5252__auto__.push((arguments[i__5246__auto___7046]));

var G__7047 = (i__5246__auto___7046 + (1));
i__5246__auto___7046 = G__7047;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq7043){
var G__7044 = cljs.core.first.call(null,seq7043);
var seq7043__$1 = cljs.core.next.call(null,seq7043);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__7044,seq7043__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(){
var args7048 = [];
var len__5245__auto___7051 = arguments.length;
var i__5246__auto___7052 = (0);
while(true){
if((i__5246__auto___7052 < len__5245__auto___7051)){
args7048.push((arguments[i__5246__auto___7052]));

var G__7053 = (i__5246__auto___7052 + (1));
i__5246__auto___7052 = G__7053;
continue;
} else {
}
break;
}

var G__7050 = args7048.length;
switch (G__7050) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7048.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(){
var args__5252__auto__ = [];
var len__5245__auto___7057 = arguments.length;
var i__5246__auto___7058 = (0);
while(true){
if((i__5246__auto___7058 < len__5245__auto___7057)){
args__5252__auto__.push((arguments[i__5246__auto___7058]));

var G__7059 = (i__5246__auto___7058 + (1));
i__5246__auto___7058 = G__7059;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq7055){
var G__7056 = cljs.core.first.call(null,seq7055);
var seq7055__$1 = cljs.core.next.call(null,seq7055);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__7056,seq7055__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(){
var args7060 = [];
var len__5245__auto___7063 = arguments.length;
var i__5246__auto___7064 = (0);
while(true){
if((i__5246__auto___7064 < len__5245__auto___7063)){
args7060.push((arguments[i__5246__auto___7064]));

var G__7065 = (i__5246__auto___7064 + (1));
i__5246__auto___7064 = G__7065;
continue;
} else {
}
break;
}

var G__7062 = args7060.length;
switch (G__7062) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7060.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map
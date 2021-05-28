// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true);

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar");

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.spec.gen.alpha/LazyVar");
}));

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4742__auto__ = [];
var len__4736__auto___873 = arguments.length;
var i__4737__auto___874 = (0);
while(true){
if((i__4737__auto___874 < len__4736__auto___873)){
args__4742__auto__.push((arguments[i__4737__auto___874]));

var G__875 = (i__4737__auto___874 + (1));
i__4737__auto___874 = G__875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
}));

(cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq872));
}));

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___877 = arguments.length;
var i__4737__auto___878 = (0);
while(true){
if((i__4737__auto___878 < len__4736__auto___877)){
args__4742__auto__.push((arguments[i__4737__auto___878]));

var G__879 = (i__4737__auto___878 + (1));
i__4737__auto___878 = G__879;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
}));

(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq876){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq876));
}));

var g_QMARK__880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
}),null));
var mkg_882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.generator_QMARK_ = (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__880).call(null,x);
});

cljs.spec.gen.alpha.generator = (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_882).call(null,gfn);
});

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_881).call(null,generator);
});
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__472__auto___903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___904 = arguments.length;
var i__4737__auto___905 = (0);
while(true){
if((i__4737__auto___905 < len__4736__auto___904)){
args__4742__auto__.push((arguments[i__4737__auto___905]));

var G__906 = (i__4737__auto___905 + (1));
i__4737__auto___905 = G__906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___903),args);
}));

(cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = (function (seq883){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq883));
}));


var g__472__auto___907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = (function cljs$spec$gen$alpha$list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___908 = arguments.length;
var i__4737__auto___909 = (0);
while(true){
if((i__4737__auto___909 < len__4736__auto___908)){
args__4742__auto__.push((arguments[i__4737__auto___909]));

var G__910 = (i__4737__auto___909 + (1));
i__4737__auto___909 = G__910;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___907),args);
}));

(cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.list.cljs$lang$applyTo = (function (seq884){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq884));
}));


var g__472__auto___911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = (function cljs$spec$gen$alpha$map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___912 = arguments.length;
var i__4737__auto___913 = (0);
while(true){
if((i__4737__auto___913 < len__4736__auto___912)){
args__4742__auto__.push((arguments[i__4737__auto___913]));

var G__914 = (i__4737__auto___913 + (1));
i__4737__auto___913 = G__914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___911),args);
}));

(cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.map.cljs$lang$applyTo = (function (seq885){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq885));
}));


var g__472__auto___915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4742__auto__ = [];
var len__4736__auto___916 = arguments.length;
var i__4737__auto___917 = (0);
while(true){
if((i__4737__auto___917 < len__4736__auto___916)){
args__4742__auto__.push((arguments[i__4737__auto___917]));

var G__918 = (i__4737__auto___917 + (1));
i__4737__auto___917 = G__918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___915),args);
}));

(cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = (function (seq886){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq886));
}));


var g__472__auto___919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = (function cljs$spec$gen$alpha$set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___920 = arguments.length;
var i__4737__auto___921 = (0);
while(true){
if((i__4737__auto___921 < len__4736__auto___920)){
args__4742__auto__.push((arguments[i__4737__auto___921]));

var G__922 = (i__4737__auto___921 + (1));
i__4737__auto___921 = G__922;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___919),args);
}));

(cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.set.cljs$lang$applyTo = (function (seq887){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq887));
}));


var g__472__auto___923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = (function cljs$spec$gen$alpha$vector(var_args){
var args__4742__auto__ = [];
var len__4736__auto___924 = arguments.length;
var i__4737__auto___925 = (0);
while(true){
if((i__4737__auto___925 < len__4736__auto___924)){
args__4742__auto__.push((arguments[i__4737__auto___925]));

var G__926 = (i__4737__auto___925 + (1));
i__4737__auto___925 = G__926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___923),args);
}));

(cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector.cljs$lang$applyTo = (function (seq888){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq888));
}));


var g__472__auto___927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4742__auto__ = [];
var len__4736__auto___928 = arguments.length;
var i__4737__auto___929 = (0);
while(true){
if((i__4737__auto___929 < len__4736__auto___928)){
args__4742__auto__.push((arguments[i__4737__auto___929]));

var G__930 = (i__4737__auto___929 + (1));
i__4737__auto___929 = G__930;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___927),args);
}));

(cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = (function (seq889){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq889));
}));


var g__472__auto___931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = (function cljs$spec$gen$alpha$fmap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___932 = arguments.length;
var i__4737__auto___933 = (0);
while(true){
if((i__4737__auto___933 < len__4736__auto___932)){
args__4742__auto__.push((arguments[i__4737__auto___933]));

var G__934 = (i__4737__auto___933 + (1));
i__4737__auto___933 = G__934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___931),args);
}));

(cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = (function (seq890){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq890));
}));


var g__472__auto___935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = (function cljs$spec$gen$alpha$elements(var_args){
var args__4742__auto__ = [];
var len__4736__auto___936 = arguments.length;
var i__4737__auto___937 = (0);
while(true){
if((i__4737__auto___937 < len__4736__auto___936)){
args__4742__auto__.push((arguments[i__4737__auto___937]));

var G__938 = (i__4737__auto___937 + (1));
i__4737__auto___937 = G__938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___935),args);
}));

(cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.elements.cljs$lang$applyTo = (function (seq891){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq891));
}));


var g__472__auto___939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = (function cljs$spec$gen$alpha$bind(var_args){
var args__4742__auto__ = [];
var len__4736__auto___940 = arguments.length;
var i__4737__auto___941 = (0);
while(true){
if((i__4737__auto___941 < len__4736__auto___940)){
args__4742__auto__.push((arguments[i__4737__auto___941]));

var G__942 = (i__4737__auto___941 + (1));
i__4737__auto___941 = G__942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___939),args);
}));

(cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.bind.cljs$lang$applyTo = (function (seq892){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq892));
}));


var g__472__auto___943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = (function cljs$spec$gen$alpha$choose(var_args){
var args__4742__auto__ = [];
var len__4736__auto___944 = arguments.length;
var i__4737__auto___945 = (0);
while(true){
if((i__4737__auto___945 < len__4736__auto___944)){
args__4742__auto__.push((arguments[i__4737__auto___945]));

var G__946 = (i__4737__auto___945 + (1));
i__4737__auto___945 = G__946;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___943),args);
}));

(cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.choose.cljs$lang$applyTo = (function (seq893){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq893));
}));


var g__472__auto___947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = (function cljs$spec$gen$alpha$one_of(var_args){
var args__4742__auto__ = [];
var len__4736__auto___948 = arguments.length;
var i__4737__auto___949 = (0);
while(true){
if((i__4737__auto___949 < len__4736__auto___948)){
args__4742__auto__.push((arguments[i__4737__auto___949]));

var G__950 = (i__4737__auto___949 + (1));
i__4737__auto___949 = G__950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___947),args);
}));

(cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = (function (seq894){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq894));
}));


var g__472__auto___951 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = (function cljs$spec$gen$alpha$such_that(var_args){
var args__4742__auto__ = [];
var len__4736__auto___952 = arguments.length;
var i__4737__auto___953 = (0);
while(true){
if((i__4737__auto___953 < len__4736__auto___952)){
args__4742__auto__.push((arguments[i__4737__auto___953]));

var G__954 = (i__4737__auto___953 + (1));
i__4737__auto___953 = G__954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___951),args);
}));

(cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = (function (seq895){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq895));
}));


var g__472__auto___955 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = (function cljs$spec$gen$alpha$tuple(var_args){
var args__4742__auto__ = [];
var len__4736__auto___956 = arguments.length;
var i__4737__auto___957 = (0);
while(true){
if((i__4737__auto___957 < len__4736__auto___956)){
args__4742__auto__.push((arguments[i__4737__auto___957]));

var G__958 = (i__4737__auto___957 + (1));
i__4737__auto___957 = G__958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___955),args);
}));

(cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = (function (seq896){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq896));
}));


var g__472__auto___959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = (function cljs$spec$gen$alpha$sample(var_args){
var args__4742__auto__ = [];
var len__4736__auto___960 = arguments.length;
var i__4737__auto___961 = (0);
while(true){
if((i__4737__auto___961 < len__4736__auto___960)){
args__4742__auto__.push((arguments[i__4737__auto___961]));

var G__962 = (i__4737__auto___961 + (1));
i__4737__auto___961 = G__962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___959),args);
}));

(cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.sample.cljs$lang$applyTo = (function (seq897){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq897));
}));


var g__472__auto___963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = (function cljs$spec$gen$alpha$return(var_args){
var args__4742__auto__ = [];
var len__4736__auto___964 = arguments.length;
var i__4737__auto___965 = (0);
while(true){
if((i__4737__auto___965 < len__4736__auto___964)){
args__4742__auto__.push((arguments[i__4737__auto___965]));

var G__966 = (i__4737__auto___965 + (1));
i__4737__auto___965 = G__966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___963),args);
}));

(cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.return$.cljs$lang$applyTo = (function (seq898){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq898));
}));


var g__472__auto___967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___968 = arguments.length;
var i__4737__auto___969 = (0);
while(true){
if((i__4737__auto___969 < len__4736__auto___968)){
args__4742__auto__.push((arguments[i__4737__auto___969]));

var G__970 = (i__4737__auto___969 + (1));
i__4737__auto___969 = G__970;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___967),args);
}));

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = (function (seq899){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq899));
}));


var g__472__auto___971 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___972 = arguments.length;
var i__4737__auto___973 = (0);
while(true){
if((i__4737__auto___973 < len__4736__auto___972)){
args__4742__auto__.push((arguments[i__4737__auto___973]));

var G__974 = (i__4737__auto___973 + (1));
i__4737__auto___973 = G__974;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___971),args);
}));

(cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = (function (seq900){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq900));
}));


var g__472__auto___975 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = (function cljs$spec$gen$alpha$frequency(var_args){
var args__4742__auto__ = [];
var len__4736__auto___976 = arguments.length;
var i__4737__auto___977 = (0);
while(true){
if((i__4737__auto___977 < len__4736__auto___976)){
args__4742__auto__.push((arguments[i__4737__auto___977]));

var G__978 = (i__4737__auto___977 + (1));
i__4737__auto___977 = G__978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___975),args);
}));

(cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = (function (seq901){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq901));
}));


var g__472__auto___979 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___980 = arguments.length;
var i__4737__auto___981 = (0);
while(true){
if((i__4737__auto___981 < len__4736__auto___980)){
args__4742__auto__.push((arguments[i__4737__auto___981]));

var G__982 = (i__4737__auto___981 + (1));
i__4737__auto___981 = G__982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__472__auto___979),args);
}));

(cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = (function (seq902){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq902));
}));

var g__485__auto___1004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = (function cljs$spec$gen$alpha$any(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1005 = arguments.length;
var i__4737__auto___1006 = (0);
while(true){
if((i__4737__auto___1006 < len__4736__auto___1005)){
args__4742__auto__.push((arguments[i__4737__auto___1006]));

var G__1007 = (i__4737__auto___1006 + (1));
i__4737__auto___1006 = G__1007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1004);
}));

(cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any.cljs$lang$applyTo = (function (seq983){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq983));
}));


var g__485__auto___1008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1009 = arguments.length;
var i__4737__auto___1010 = (0);
while(true){
if((i__4737__auto___1010 < len__4736__auto___1009)){
args__4742__auto__.push((arguments[i__4737__auto___1010]));

var G__1011 = (i__4737__auto___1010 + (1));
i__4737__auto___1010 = G__1011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1008);
}));

(cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = (function (seq984){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq984));
}));


var g__485__auto___1012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = (function cljs$spec$gen$alpha$boolean(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1013 = arguments.length;
var i__4737__auto___1014 = (0);
while(true){
if((i__4737__auto___1014 < len__4736__auto___1013)){
args__4742__auto__.push((arguments[i__4737__auto___1014]));

var G__1015 = (i__4737__auto___1014 + (1));
i__4737__auto___1014 = G__1015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1012);
}));

(cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = (function (seq985){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq985));
}));


var g__485__auto___1016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = (function cljs$spec$gen$alpha$char(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1017 = arguments.length;
var i__4737__auto___1018 = (0);
while(true){
if((i__4737__auto___1018 < len__4736__auto___1017)){
args__4742__auto__.push((arguments[i__4737__auto___1018]));

var G__1019 = (i__4737__auto___1018 + (1));
i__4737__auto___1018 = G__1019;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1016);
}));

(cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char$.cljs$lang$applyTo = (function (seq986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq986));
}));


var g__485__auto___1020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1021 = arguments.length;
var i__4737__auto___1022 = (0);
while(true){
if((i__4737__auto___1022 < len__4736__auto___1021)){
args__4742__auto__.push((arguments[i__4737__auto___1022]));

var G__1023 = (i__4737__auto___1022 + (1));
i__4737__auto___1022 = G__1023;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1020);
}));

(cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = (function (seq987){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq987));
}));


var g__485__auto___1024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1025 = arguments.length;
var i__4737__auto___1026 = (0);
while(true){
if((i__4737__auto___1026 < len__4736__auto___1025)){
args__4742__auto__.push((arguments[i__4737__auto___1026]));

var G__1027 = (i__4737__auto___1026 + (1));
i__4737__auto___1026 = G__1027;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1024);
}));

(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = (function (seq988){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq988));
}));


var g__485__auto___1028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1029 = arguments.length;
var i__4737__auto___1030 = (0);
while(true){
if((i__4737__auto___1030 < len__4736__auto___1029)){
args__4742__auto__.push((arguments[i__4737__auto___1030]));

var G__1031 = (i__4737__auto___1030 + (1));
i__4737__auto___1030 = G__1031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1028);
}));

(cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = (function (seq989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq989));
}));


var g__485__auto___1032 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = (function cljs$spec$gen$alpha$double(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1033 = arguments.length;
var i__4737__auto___1034 = (0);
while(true){
if((i__4737__auto___1034 < len__4736__auto___1033)){
args__4742__auto__.push((arguments[i__4737__auto___1034]));

var G__1035 = (i__4737__auto___1034 + (1));
i__4737__auto___1034 = G__1035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1032);
}));

(cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double$.cljs$lang$applyTo = (function (seq990){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq990));
}));


var g__485__auto___1036 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = (function cljs$spec$gen$alpha$int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1037 = arguments.length;
var i__4737__auto___1038 = (0);
while(true){
if((i__4737__auto___1038 < len__4736__auto___1037)){
args__4742__auto__.push((arguments[i__4737__auto___1038]));

var G__1039 = (i__4737__auto___1038 + (1));
i__4737__auto___1038 = G__1039;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1036);
}));

(cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.int$.cljs$lang$applyTo = (function (seq991){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq991));
}));


var g__485__auto___1040 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = (function cljs$spec$gen$alpha$keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1041 = arguments.length;
var i__4737__auto___1042 = (0);
while(true){
if((i__4737__auto___1042 < len__4736__auto___1041)){
args__4742__auto__.push((arguments[i__4737__auto___1042]));

var G__1043 = (i__4737__auto___1042 + (1));
i__4737__auto___1042 = G__1043;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1040);
}));

(cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = (function (seq992){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq992));
}));


var g__485__auto___1044 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1045 = arguments.length;
var i__4737__auto___1046 = (0);
while(true){
if((i__4737__auto___1046 < len__4736__auto___1045)){
args__4742__auto__.push((arguments[i__4737__auto___1046]));

var G__1047 = (i__4737__auto___1046 + (1));
i__4737__auto___1046 = G__1047;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1044);
}));

(cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = (function (seq993){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq993));
}));


var g__485__auto___1048 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1049 = arguments.length;
var i__4737__auto___1050 = (0);
while(true){
if((i__4737__auto___1050 < len__4736__auto___1049)){
args__4742__auto__.push((arguments[i__4737__auto___1050]));

var G__1051 = (i__4737__auto___1050 + (1));
i__4737__auto___1050 = G__1051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1048);
}));

(cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = (function (seq994){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq994));
}));


var g__485__auto___1052 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = (function cljs$spec$gen$alpha$ratio(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1053 = arguments.length;
var i__4737__auto___1054 = (0);
while(true){
if((i__4737__auto___1054 < len__4736__auto___1053)){
args__4742__auto__.push((arguments[i__4737__auto___1054]));

var G__1055 = (i__4737__auto___1054 + (1));
i__4737__auto___1054 = G__1055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1052);
}));

(cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = (function (seq995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq995));
}));


var g__485__auto___1056 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1057 = arguments.length;
var i__4737__auto___1058 = (0);
while(true){
if((i__4737__auto___1058 < len__4736__auto___1057)){
args__4742__auto__.push((arguments[i__4737__auto___1058]));

var G__1059 = (i__4737__auto___1058 + (1));
i__4737__auto___1058 = G__1059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1056);
}));

(cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = (function (seq996){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq996));
}));


var g__485__auto___1060 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1061 = arguments.length;
var i__4737__auto___1062 = (0);
while(true){
if((i__4737__auto___1062 < len__4736__auto___1061)){
args__4742__auto__.push((arguments[i__4737__auto___1062]));

var G__1063 = (i__4737__auto___1062 + (1));
i__4737__auto___1062 = G__1063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1060);
}));

(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = (function (seq997){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq997));
}));


var g__485__auto___1064 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = (function cljs$spec$gen$alpha$string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1065 = arguments.length;
var i__4737__auto___1066 = (0);
while(true){
if((i__4737__auto___1066 < len__4736__auto___1065)){
args__4742__auto__.push((arguments[i__4737__auto___1066]));

var G__1067 = (i__4737__auto___1066 + (1));
i__4737__auto___1066 = G__1067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1064);
}));

(cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string.cljs$lang$applyTo = (function (seq998){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq998));
}));


var g__485__auto___1068 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1069 = arguments.length;
var i__4737__auto___1070 = (0);
while(true){
if((i__4737__auto___1070 < len__4736__auto___1069)){
args__4742__auto__.push((arguments[i__4737__auto___1070]));

var G__1071 = (i__4737__auto___1070 + (1));
i__4737__auto___1070 = G__1071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1068);
}));

(cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = (function (seq999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq999));
}));


var g__485__auto___1072 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1073 = arguments.length;
var i__4737__auto___1074 = (0);
while(true){
if((i__4737__auto___1074 < len__4736__auto___1073)){
args__4742__auto__.push((arguments[i__4737__auto___1074]));

var G__1075 = (i__4737__auto___1074 + (1));
i__4737__auto___1074 = G__1075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1072);
}));

(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = (function (seq1000){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1000));
}));


var g__485__auto___1076 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = (function cljs$spec$gen$alpha$symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1077 = arguments.length;
var i__4737__auto___1078 = (0);
while(true){
if((i__4737__auto___1078 < len__4736__auto___1077)){
args__4742__auto__.push((arguments[i__4737__auto___1078]));

var G__1079 = (i__4737__auto___1078 + (1));
i__4737__auto___1078 = G__1079;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1076);
}));

(cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = (function (seq1001){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1001));
}));


var g__485__auto___1080 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1081 = arguments.length;
var i__4737__auto___1082 = (0);
while(true){
if((i__4737__auto___1082 < len__4736__auto___1081)){
args__4742__auto__.push((arguments[i__4737__auto___1082]));

var G__1083 = (i__4737__auto___1082 + (1));
i__4737__auto___1082 = G__1083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1080);
}));

(cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = (function (seq1002){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1002));
}));


var g__485__auto___1084 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = (function cljs$spec$gen$alpha$uuid(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1085 = arguments.length;
var i__4737__auto___1086 = (0);
while(true){
if((i__4737__auto___1086 < len__4736__auto___1085)){
args__4742__auto__.push((arguments[i__4737__auto___1086]));

var G__1087 = (i__4737__auto___1086 + (1));
i__4737__auto___1086 = G__1087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__485__auto___1084);
}));

(cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = (function (seq1003){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1003));
}));

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1090 = arguments.length;
var i__4737__auto___1091 = (0);
while(true){
if((i__4737__auto___1091 < len__4736__auto___1090)){
args__4742__auto__.push((arguments[i__4737__auto___1091]));

var G__1092 = (i__4737__auto___1091 + (1));
i__4737__auto___1091 = G__1092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__1088_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__1088_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
}));

(cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq1089){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1089));
}));

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,(function (p1__1094_SHARP_){
return (new Date(p1__1094_SHARP_));
}),cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,(function (p1__1093_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1093_SHARP_),".com"].join('')));
}),cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map

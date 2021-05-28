// Compiled by ClojureScript 1.10.758 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__28180_SHARP_){
var k = f.call(null,p1__28180_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28181){
var vec__28182 = p__28181;
var k = cljs.core.nth.call(null,vec__28182,(0),null);
var v = cljs.core.nth.call(null,vec__28182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28186 = arguments.length;
var i__4737__auto___28187 = (0);
while(true){
if((i__4737__auto___28187 < len__4736__auto___28186)){
args__4742__auto__.push((arguments[i__4737__auto___28187]));

var G__28188 = (i__4737__auto___28187 + (1));
i__4737__auto___28187 = G__28188;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq28185){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28185));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__28191){
var map__28192 = p__28191;
var map__28192__$1 = (((((!((map__28192 == null))))?(((((map__28192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28192):map__28192);
var message = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__28190_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28190_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__28189_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__28189_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__28195){
var map__28196 = p__28195;
var map__28196__$1 = (((((!((map__28196 == null))))?(((((map__28196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var message_data = map__28196__$1;
var message = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__28198 = file_excerpt;
var map__28198__$1 = (((((!((map__28198 == null))))?(((((map__28198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);
var start_line = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__28199 = cljs.core.split_with.call(null,(function (p1__28194_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__28194_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__28199,(0),null);
var end = cljs.core.nth.call(null,vec__28199,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__28203){
var map__28204 = p__28203;
var map__28204__$1 = (((((!((map__28204 == null))))?(((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var file = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28206 = "";
var G__28206__$1 = (cljs.core.truth_(file)?[G__28206,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28206);
var G__28206__$2 = (cljs.core.truth_(line)?[G__28206__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28206__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__28206__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28206__$2;
}
});
figwheel.core.version_value = (function figwheel$core$version_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__28207_SHARP_){
return parseInt(p1__28207_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e28214){if((e28214 instanceof Error)){
var e = e28214;
return ((100000000000) * (100));
} else {
throw e28214;

}
}});

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = (((figwheel.core.version_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.core.version_value.call(null,"1.10.844")))?(new goog.debug.Logger("Figwheel")):goog.log.getLogger.call(null,"Figwheel"));
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_28263 = (new goog.debug.Console());
var G__28215_28264 = c_28263.getFormatter();
goog.object.set(G__28215_28264,"showAbsoluteTime",false);

goog.object.set(G__28215_28264,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_28263);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__28216 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__28216,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__28216;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_28265 = cljs.core.atom.call(null,(0));
var promise_chain_28266 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_28265) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_28265,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_28266.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__28217 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__28218 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__28218);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__28219 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__28220 = null;
var count__28221 = (0);
var i__28222 = (0);
while(true){
if((i__28222 < count__28221)){
var w = cljs.core._nth.call(null,chunk__28220,i__28222);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28267 = seq__28219;
var G__28268 = chunk__28220;
var G__28269 = count__28221;
var G__28270 = (i__28222 + (1));
seq__28219 = G__28267;
chunk__28220 = G__28268;
count__28221 = G__28269;
i__28222 = G__28270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28219);
if(temp__5735__auto__){
var seq__28219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28219__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28219__$1);
var G__28271 = cljs.core.chunk_rest.call(null,seq__28219__$1);
var G__28272 = c__4556__auto__;
var G__28273 = cljs.core.count.call(null,c__4556__auto__);
var G__28274 = (0);
seq__28219 = G__28271;
chunk__28220 = G__28272;
count__28221 = G__28273;
i__28222 = G__28274;
continue;
} else {
var w = cljs.core.first.call(null,seq__28219__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28275 = cljs.core.next.call(null,seq__28219__$1);
var G__28276 = null;
var G__28277 = (0);
var G__28278 = (0);
seq__28219 = G__28275;
chunk__28220 = G__28276;
count__28221 = G__28277;
i__28222 = G__28278;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__28217);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_28266.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__28223 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__28224 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__28224);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__28223);
}}));
} else {
return promise_chain_28266.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28279 = arguments.length;
var i__4737__auto___28280 = (0);
while(true){
if((i__4737__auto___28280 < len__4736__auto___28279)){
args__4742__auto__.push((arguments[i__4737__auto___28280]));

var G__28281 = (i__4737__auto___28280 + (1));
i__4737__auto___28280 = G__28281;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__28227){
var vec__28228 = p__28227;
var n = cljs.core.nth.call(null,vec__28228,(0),null);
var mdata = cljs.core.nth.call(null,vec__28228,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__28231 = cljs.core.seq.call(null,hooks);
var chunk__28232 = null;
var count__28233 = (0);
var i__28234 = (0);
while(true){
if((i__28234 < count__28233)){
var vec__28241 = cljs.core._nth.call(null,chunk__28232,i__28234);
var n = cljs.core.nth.call(null,vec__28241,(0),null);
var f = cljs.core.nth.call(null,vec__28241,(1),null);
var temp__5733__auto___28282 = cljs.core.reduce.call(null,((function (seq__28231,chunk__28232,count__28233,i__28234,vec__28241,n,f,hooks){
return (function (p1__28208_SHARP_,p2__28209_SHARP_){
if(cljs.core.truth_(p1__28208_SHARP_)){
return goog.object.get(p1__28208_SHARP_,p2__28209_SHARP_);
} else {
return null;
}
});})(seq__28231,chunk__28232,count__28233,i__28234,vec__28241,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___28282)){
var hook_28283 = temp__5733__auto___28282;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28283,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28284 = seq__28231;
var G__28285 = chunk__28232;
var G__28286 = count__28233;
var G__28287 = (i__28234 + (1));
seq__28231 = G__28284;
chunk__28232 = G__28285;
count__28233 = G__28286;
i__28234 = G__28287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28231);
if(temp__5735__auto__){
var seq__28231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28231__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28231__$1);
var G__28288 = cljs.core.chunk_rest.call(null,seq__28231__$1);
var G__28289 = c__4556__auto__;
var G__28290 = cljs.core.count.call(null,c__4556__auto__);
var G__28291 = (0);
seq__28231 = G__28288;
chunk__28232 = G__28289;
count__28233 = G__28290;
i__28234 = G__28291;
continue;
} else {
var vec__28244 = cljs.core.first.call(null,seq__28231__$1);
var n = cljs.core.nth.call(null,vec__28244,(0),null);
var f = cljs.core.nth.call(null,vec__28244,(1),null);
var temp__5733__auto___28292 = cljs.core.reduce.call(null,((function (seq__28231,chunk__28232,count__28233,i__28234,vec__28244,n,f,seq__28231__$1,temp__5735__auto__,hooks){
return (function (p1__28208_SHARP_,p2__28209_SHARP_){
if(cljs.core.truth_(p1__28208_SHARP_)){
return goog.object.get(p1__28208_SHARP_,p2__28209_SHARP_);
} else {
return null;
}
});})(seq__28231,chunk__28232,count__28233,i__28234,vec__28244,n,f,seq__28231__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___28292)){
var hook_28293 = temp__5733__auto___28292;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28293,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28294 = cljs.core.next.call(null,seq__28231__$1);
var G__28295 = null;
var G__28296 = (0);
var G__28297 = (0);
seq__28231 = G__28294;
chunk__28232 = G__28295;
count__28233 = G__28296;
i__28234 = G__28297;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq28225){
var G__28226 = cljs.core.first.call(null,seq28225);
var seq28225__$1 = cljs.core.next.call(null,seq28225);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28226,seq28225__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28247){
var vec__28248 = p__28247;
var k = cljs.core.nth.call(null,vec__28248,(0),null);
var v = cljs.core.nth.call(null,vec__28248,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__28210_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__28210_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__28210_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__28211_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__28211_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__28212_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__28212_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__28251_28298 = cljs.core.seq.call(null,to_reload);
var chunk__28252_28299 = null;
var count__28253_28300 = (0);
var i__28254_28301 = (0);
while(true){
if((i__28254_28301 < count__28253_28300)){
var ns_28302 = cljs.core._nth.call(null,chunk__28252_28299,i__28254_28301);
goog.require(cljs.core.name.call(null,ns_28302),true);


var G__28303 = seq__28251_28298;
var G__28304 = chunk__28252_28299;
var G__28305 = count__28253_28300;
var G__28306 = (i__28254_28301 + (1));
seq__28251_28298 = G__28303;
chunk__28252_28299 = G__28304;
count__28253_28300 = G__28305;
i__28254_28301 = G__28306;
continue;
} else {
var temp__5735__auto___28307 = cljs.core.seq.call(null,seq__28251_28298);
if(temp__5735__auto___28307){
var seq__28251_28308__$1 = temp__5735__auto___28307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28251_28308__$1)){
var c__4556__auto___28309 = cljs.core.chunk_first.call(null,seq__28251_28308__$1);
var G__28310 = cljs.core.chunk_rest.call(null,seq__28251_28308__$1);
var G__28311 = c__4556__auto___28309;
var G__28312 = cljs.core.count.call(null,c__4556__auto___28309);
var G__28313 = (0);
seq__28251_28298 = G__28310;
chunk__28252_28299 = G__28311;
count__28253_28300 = G__28312;
i__28254_28301 = G__28313;
continue;
} else {
var ns_28314 = cljs.core.first.call(null,seq__28251_28308__$1);
goog.require(cljs.core.name.call(null,ns_28314),true);


var G__28315 = cljs.core.next.call(null,seq__28251_28308__$1);
var G__28316 = null;
var G__28317 = (0);
var G__28318 = (0);
seq__28251_28298 = G__28315;
chunk__28252_28299 = G__28316;
count__28253_28300 = G__28317;
i__28254_28301 = G__28318;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_28319 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_28319);
} else {
setTimeout(after_reload_fn_28319,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__28255 = cljs.core.seq.call(null,warnings);
var chunk__28256 = null;
var count__28257 = (0);
var i__28258 = (0);
while(true){
if((i__28258 < count__28257)){
var warning = cljs.core._nth.call(null,chunk__28256,i__28258);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__28320 = seq__28255;
var G__28321 = chunk__28256;
var G__28322 = count__28257;
var G__28323 = (i__28258 + (1));
seq__28255 = G__28320;
chunk__28256 = G__28321;
count__28257 = G__28322;
i__28258 = G__28323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28255);
if(temp__5735__auto__){
var seq__28255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28255__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28255__$1);
var G__28324 = cljs.core.chunk_rest.call(null,seq__28255__$1);
var G__28325 = c__4556__auto__;
var G__28326 = cljs.core.count.call(null,c__4556__auto__);
var G__28327 = (0);
seq__28255 = G__28324;
chunk__28256 = G__28325;
count__28257 = G__28326;
i__28258 = G__28327;
continue;
} else {
var warning = cljs.core.first.call(null,seq__28255__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__28328 = cljs.core.next.call(null,seq__28255__$1);
var G__28329 = null;
var G__28330 = (0);
var G__28331 = (0);
seq__28255 = G__28328;
chunk__28256 = G__28329;
count__28257 = G__28330;
i__28258 = G__28331;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__28259){
var map__28260 = p__28259;
var map__28260__$1 = (((((!((map__28260 == null))))?(((((map__28260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28260):map__28260);
var exception_data = map__28260__$1;
var file = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__28213_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__28213_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__28262 = "Compile Exception - ";
var G__28262__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__28262,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__28262);
if(cljs.core.truth_(file)){
return [G__28262__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__28262__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map

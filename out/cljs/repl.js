// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1734){
var map__1735 = p__1734;
var map__1735__$1 = (((((!((map__1735 == null))))?(((((map__1735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1735):map__1735);
var m = map__1735__$1;
var n = cljs.core.get.call(null,map__1735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1737_1769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1738_1770 = null;
var count__1739_1771 = (0);
var i__1740_1772 = (0);
while(true){
if((i__1740_1772 < count__1739_1771)){
var f_1773 = cljs.core._nth.call(null,chunk__1738_1770,i__1740_1772);
cljs.core.println.call(null,"  ",f_1773);


var G__1774 = seq__1737_1769;
var G__1775 = chunk__1738_1770;
var G__1776 = count__1739_1771;
var G__1777 = (i__1740_1772 + (1));
seq__1737_1769 = G__1774;
chunk__1738_1770 = G__1775;
count__1739_1771 = G__1776;
i__1740_1772 = G__1777;
continue;
} else {
var temp__5735__auto___1778 = cljs.core.seq.call(null,seq__1737_1769);
if(temp__5735__auto___1778){
var seq__1737_1779__$1 = temp__5735__auto___1778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1737_1779__$1)){
var c__4556__auto___1780 = cljs.core.chunk_first.call(null,seq__1737_1779__$1);
var G__1781 = cljs.core.chunk_rest.call(null,seq__1737_1779__$1);
var G__1782 = c__4556__auto___1780;
var G__1783 = cljs.core.count.call(null,c__4556__auto___1780);
var G__1784 = (0);
seq__1737_1769 = G__1781;
chunk__1738_1770 = G__1782;
count__1739_1771 = G__1783;
i__1740_1772 = G__1784;
continue;
} else {
var f_1785 = cljs.core.first.call(null,seq__1737_1779__$1);
cljs.core.println.call(null,"  ",f_1785);


var G__1786 = cljs.core.next.call(null,seq__1737_1779__$1);
var G__1787 = null;
var G__1788 = (0);
var G__1789 = (0);
seq__1737_1769 = G__1786;
chunk__1738_1770 = G__1787;
count__1739_1771 = G__1788;
i__1740_1772 = G__1789;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1790 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1790);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1790)))?cljs.core.second.call(null,arglists_1790):arglists_1790));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1741_1791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1742_1792 = null;
var count__1743_1793 = (0);
var i__1744_1794 = (0);
while(true){
if((i__1744_1794 < count__1743_1793)){
var vec__1755_1795 = cljs.core._nth.call(null,chunk__1742_1792,i__1744_1794);
var name_1796 = cljs.core.nth.call(null,vec__1755_1795,(0),null);
var map__1758_1797 = cljs.core.nth.call(null,vec__1755_1795,(1),null);
var map__1758_1798__$1 = (((((!((map__1758_1797 == null))))?(((((map__1758_1797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1758_1797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1758_1797):map__1758_1797);
var doc_1799 = cljs.core.get.call(null,map__1758_1798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1800 = cljs.core.get.call(null,map__1758_1798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1796);

cljs.core.println.call(null," ",arglists_1800);

if(cljs.core.truth_(doc_1799)){
cljs.core.println.call(null," ",doc_1799);
} else {
}


var G__1801 = seq__1741_1791;
var G__1802 = chunk__1742_1792;
var G__1803 = count__1743_1793;
var G__1804 = (i__1744_1794 + (1));
seq__1741_1791 = G__1801;
chunk__1742_1792 = G__1802;
count__1743_1793 = G__1803;
i__1744_1794 = G__1804;
continue;
} else {
var temp__5735__auto___1805 = cljs.core.seq.call(null,seq__1741_1791);
if(temp__5735__auto___1805){
var seq__1741_1806__$1 = temp__5735__auto___1805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1741_1806__$1)){
var c__4556__auto___1807 = cljs.core.chunk_first.call(null,seq__1741_1806__$1);
var G__1808 = cljs.core.chunk_rest.call(null,seq__1741_1806__$1);
var G__1809 = c__4556__auto___1807;
var G__1810 = cljs.core.count.call(null,c__4556__auto___1807);
var G__1811 = (0);
seq__1741_1791 = G__1808;
chunk__1742_1792 = G__1809;
count__1743_1793 = G__1810;
i__1744_1794 = G__1811;
continue;
} else {
var vec__1760_1812 = cljs.core.first.call(null,seq__1741_1806__$1);
var name_1813 = cljs.core.nth.call(null,vec__1760_1812,(0),null);
var map__1763_1814 = cljs.core.nth.call(null,vec__1760_1812,(1),null);
var map__1763_1815__$1 = (((((!((map__1763_1814 == null))))?(((((map__1763_1814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1763_1814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1763_1814):map__1763_1814);
var doc_1816 = cljs.core.get.call(null,map__1763_1815__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1817 = cljs.core.get.call(null,map__1763_1815__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1813);

cljs.core.println.call(null," ",arglists_1817);

if(cljs.core.truth_(doc_1816)){
cljs.core.println.call(null," ",doc_1816);
} else {
}


var G__1818 = cljs.core.next.call(null,seq__1741_1806__$1);
var G__1819 = null;
var G__1820 = (0);
var G__1821 = (0);
seq__1741_1791 = G__1818;
chunk__1742_1792 = G__1819;
count__1743_1793 = G__1820;
i__1744_1794 = G__1821;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__1765 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1766 = null;
var count__1767 = (0);
var i__1768 = (0);
while(true){
if((i__1768 < count__1767)){
var role = cljs.core._nth.call(null,chunk__1766,i__1768);
var temp__5735__auto___1822__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1822__$1)){
var spec_1823 = temp__5735__auto___1822__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1823));
} else {
}


var G__1824 = seq__1765;
var G__1825 = chunk__1766;
var G__1826 = count__1767;
var G__1827 = (i__1768 + (1));
seq__1765 = G__1824;
chunk__1766 = G__1825;
count__1767 = G__1826;
i__1768 = G__1827;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__1765);
if(temp__5735__auto____$1){
var seq__1765__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1765__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1765__$1);
var G__1828 = cljs.core.chunk_rest.call(null,seq__1765__$1);
var G__1829 = c__4556__auto__;
var G__1830 = cljs.core.count.call(null,c__4556__auto__);
var G__1831 = (0);
seq__1765 = G__1828;
chunk__1766 = G__1829;
count__1767 = G__1830;
i__1768 = G__1831;
continue;
} else {
var role = cljs.core.first.call(null,seq__1765__$1);
var temp__5735__auto___1832__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1832__$2)){
var spec_1833 = temp__5735__auto___1832__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1833));
} else {
}


var G__1834 = cljs.core.next.call(null,seq__1765__$1);
var G__1835 = null;
var G__1836 = (0);
var G__1837 = (0);
seq__1765 = G__1834;
chunk__1766 = G__1835;
count__1767 = G__1836;
i__1768 = G__1837;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1838 = cljs.core.conj.call(null,via,t);
var G__1839 = cljs.core.ex_cause.call(null,t);
via = G__1838;
t = G__1839;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1842 = datafied_throwable;
var map__1842__$1 = (((((!((map__1842 == null))))?(((((map__1842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1842):map__1842);
var via = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1843 = cljs.core.last.call(null,via);
var map__1843__$1 = (((((!((map__1843 == null))))?(((((map__1843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1843):map__1843);
var type = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1844 = data;
var map__1844__$1 = (((((!((map__1844 == null))))?(((((map__1844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1844):map__1844);
var problems = cljs.core.get.call(null,map__1844__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1844__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1844__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1845 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1845__$1 = (((((!((map__1845 == null))))?(((((map__1845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1845):map__1845);
var top_data = map__1845__$1;
var source = cljs.core.get.call(null,map__1845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1850 = phase;
var G__1850__$1 = (((G__1850 instanceof cljs.core.Keyword))?G__1850.fqn:null);
switch (G__1850__$1) {
case "read-source":
var map__1851 = data;
var map__1851__$1 = (((((!((map__1851 == null))))?(((((map__1851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1851):map__1851);
var line = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1853 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1853__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1853,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1853);
var G__1853__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1853__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1853__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1853__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1854 = top_data;
var G__1854__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1854,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1854);
var G__1854__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1854__$1);
var G__1854__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1854__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1854__$2);
var G__1854__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1854__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1854__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1854__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1854__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1855 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1855,(0),null);
var method = cljs.core.nth.call(null,vec__1855,(1),null);
var file = cljs.core.nth.call(null,vec__1855,(2),null);
var line = cljs.core.nth.call(null,vec__1855,(3),null);
var G__1858 = top_data;
var G__1858__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1858,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1858);
var G__1858__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1858__$1);
var G__1858__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__1858__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1858__$2);
var G__1858__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1858__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1858__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1858__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1858__$4;
}

break;
case "execution":
var vec__1859 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1859,(0),null);
var method = cljs.core.nth.call(null,vec__1859,(1),null);
var file = cljs.core.nth.call(null,vec__1859,(2),null);
var line = cljs.core.nth.call(null,vec__1859,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1841_SHARP_){
var or__4126__auto__ = (p1__1841_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1841_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__1862 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1862__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1862,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1862);
var G__1862__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1862__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1862__$1);
var G__1862__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1862__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1862__$2);
var G__1862__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1862__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1862__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1862__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1862__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1850__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1866){
var map__1867 = p__1866;
var map__1867__$1 = (((((!((map__1867 == null))))?(((((map__1867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1867):map__1867);
var triage_data = map__1867__$1;
var phase = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1867__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1869 = phase;
var G__1869__$1 = (((G__1869 instanceof cljs.core.Keyword))?G__1869.fqn:null);
switch (G__1869__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1870_1879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1871_1880 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1872_1881 = true;
var _STAR_print_fn_STAR__temp_val__1873_1882 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1872_1881);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1873_1882);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1864_SHARP_){
return cljs.core.dissoc.call(null,p1__1864_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1871_1880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1870_1879);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1874_1883 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1875_1884 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1876_1885 = true;
var _STAR_print_fn_STAR__temp_val__1877_1886 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1876_1885);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1877_1886);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1865_SHARP_){
return cljs.core.dissoc.call(null,p1__1865_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1875_1884);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1874_1883);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1869__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

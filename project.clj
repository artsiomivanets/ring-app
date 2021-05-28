(defproject ring-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :plugins [[lein-cljsbuild "1.1.7"]]

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/data.json "2.3.1"]
                 [cider/piggieback "0.5.1"]
                 [hiccup "1.0.5"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.2"]
                 [com.bhauman/figwheel-main "0.2.13"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [lein-figwheel "0.5.20"]
                 [org.clojure/clojurescript "1.10.758"]
                 [ring "1.9.3"]]
  :resource-paths ["resources", "target"]
  :aliases { "figwheel" ["trampoline" "run" "-m" "figwheel.main"]}
  :repl-options {:init-ns ring-app.core }
  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :figwheel true
                             :compiler {:main "ring-app.core"
                                        :asset-path    "js/out"
                                        :output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :pretty-print true}} }}
  :main ring-app.core)


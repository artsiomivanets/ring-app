(ns ring-app.core
  (:require [org.httpkit.server :refer :all]
            [clojure.data.json :as json]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js]]
            [compojure.core :refer :all]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :as rr]))

(defn index-page
  []
  (html
   [:h1#content "Hello world from hiccup"]
   ; (include-js "js/out/goog/base.js")
   (include-js "cljs-out/dev-main.js")))

(defroutes handler
  (GET "/" request (index-page))
  (GET "/foo" request "Hello world foo")
  (resources "/")
  (not-found "<h1>Page not found</h1>"))

(defonce server (atom nil))

(defn app
  [req]
  (-> req
      handler))

(defn start-server []
  (reset! server (run-server #'app {:port 3000})))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main []
  (start-server))

(comment
  (stop-server)

  (figwheel.main.api/start {:mode :serve
                            :ring-server-options {:host "0.0.0.0" :port 3001}
                            :target-dir "resources"} "dev")

  (figwheel.main.api/stop  "dev")

  (start-server))

(require 'figwheel.main.api)


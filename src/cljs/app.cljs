(ns ring-app.core)
(-> (.getElementById js/document "content")
    (.-innerHTML)
    (set!"HelloWorld!"))

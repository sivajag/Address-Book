(ns address_book.core
  (:use [compojure.core]
        [ring.adapter.jetty])
  (:require [compojure.route :as route]))

(defroutes example
  (GET "/" [] "<h1>My Address Book!</h1>")
  (route/files "/" {:root "public"})
  (route/not-found "Page not found"))

(run-jetty example {:port 8080})
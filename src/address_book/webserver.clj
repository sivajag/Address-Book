(ns address_book.webserver
  (:use [compojure.core]
        [ring.adapter.jetty]
        [address_book.routes :as routes]))

(future (run-jetty (var address-book) {:port 8080}))
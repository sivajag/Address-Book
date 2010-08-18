(ns address_book.routes
  (:use [compojure.core])
  (:require [compojure.route :as route]))

(defroutes address-book
  (GET "/" [] "<h1>My Address Book!</h1>")
  (route/files "/" {:root "public"})
  (route/not-found "Page not found"))


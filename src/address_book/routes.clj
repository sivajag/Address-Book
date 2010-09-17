(ns address_book.routes
  (:use [compojure.core])
  (:require [address-book.address :as address]
            [address-book.middleware :as mdw]
            [compojure.route :as route]
            [clj-json.core :as json]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defroutes handler
  (GET "/addresses" [] (json-response (address/find-all)))
  (GET "/addresses/:id" [id] (json-response (address/find id)))
  (POST "/addresses" {params :params}  (json-response (address/create params)))
  (PUT "/addresses/:id" {params :params} (json-response (address/update (params "id")  params)))

  (route/files "/" {:root "public"})
  (route/not-found "Page not found")) 

(def address-book
     (-> handler
         mdw/wrap-request-logging))

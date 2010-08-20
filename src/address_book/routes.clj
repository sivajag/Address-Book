(ns address_book.routes
  (:use [compojure.core]
        [ring.middleware.json-params])
  (:require [address-book.address :as address]
            [compojure.route :as route]
            [clj-json.core :as json]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defroutes handler
  (GET "/addresses" [] (json-response (address/find-all)))
  (GET "/addresses/:id" [id] (json-response (address/find id)))
  (POST "/addresses" [attrs]  (json-response (address/create attrs)))
  (PUT "/addresses/:id" [id attrs]  (json-response (address/update id attrs)))
  (DELETE "/addresses/:id" [id]  (json-response (address/delete id)))

  (route/files "/" {:root "public"})
  (route/not-found "Page not found")) 


(def address-book
     (-> handler
         wrap-json-params))

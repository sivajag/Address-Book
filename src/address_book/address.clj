(ns address-book.address
  (:use [address-book.utils number])
  (:refer-clojure :exclude (find create)))

(def STORE (atom {:1 {:id :1 :name "siva" :street1 "88 17th " :street2 "#203"}}))

(defn create [attrs]
  (let [id (random-number)
        new-attrs (merge {:id id} attrs)]
    (swap! STORE assoc id new-attrs)
    new-attrs))

(defn find-all []
  (vals @STORE))

(defn find [id]
  ((to-keyword id) @STORE))

(defn update [id attrs]
  (let [updated-attrs (merge (find id) attrs)]
    (swap! STORE assoc id updated-attrs)
    updated-attrs))

(defn delete [id]
  (let [old-attrs (find id)]
    (swap! STORE dissoc id)
    old-attrs))


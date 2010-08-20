(ns address-book.utils.number
  (:import [java.util Date]))

(defn to-keyword [num]
  (if-not (keyword? num)
    (keyword (str num))
    num))

(defn random-number []
  (to-keyword (.getTime (Date.))))
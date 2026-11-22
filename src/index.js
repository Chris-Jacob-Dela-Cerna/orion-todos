//    ===============================
//               IMPORTS
//    ===============================

import { isBefore, isAfter, isEqual } from "date-fns";

import TodoCard from "./TodoCard.js";
import TodoItem from "./TodoItem.js";
import card from "./json-example.json" with { type: ".json" }

import "./styles.css";



//    ===============================
//               HELPERS
//    ===============================

//    SORTING

function sortByName(ascending = true) {
  return function(a, b) {
    if (ascending) 
      return a.name.localeCompare(b.name);
    else
      return b.name.localeCompare(a.name);
  };
}

function sortByDate(key, ascending = true) {
  return function(a, b) {
    if (!isEqual(a[key], b[key])) {
      if (ascending)
        isBefore(a[key], b[key]) ? -1 : 1;
      else
        isAfter(a[key], b[key])  ? -1 : 1;
    }
    return sortByName(ascending);
  };
}

function sortByPriority(ascending = true) {
  return function(a, b) {
    if (a.priorityLevel !== b.priorityLevel) {
      if (ascending)
        return a.priorityLevel - b.priorityLevel;
      else
        return b.priorityLevel - a.priorityLevel;
    }
    return sortByName(ascending);
  };
}
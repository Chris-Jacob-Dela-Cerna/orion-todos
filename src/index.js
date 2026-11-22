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

function sortNameAscending(a, b) {
  return a.name.localeCompare(b.name);
}

function sortNameDescending(a, b) {
  return b.name.localeCompare(a.name);
}

function sortDueDateAscending(a, b) {
  if (!isEqual(a.dueDate, b.dueDate)) {
    if (isBefore(a.dueDate, b.dueDate)) {
      return -1;
    }
    else if (isAfter(a.dueDate, b.dueDate)) {
      return 1;
    }
  }
  return sortNameAscending();
}

function sortDueDateDescending(a, b) {
  if (!isEqual(b.dueDate, a.dueDate)) {
    if (isBefore(b.dueDate, a.dueDate)) {
      return -1;
    }
    else if (isAfter(b.dueDate, a.dueDate)) {
      return 1;
    }
  }
  return sortNameDescending();
}

// function sortLastModifiedAscending(a, b) {}

// function sortLastModifiedDescending(a, b) {}

function sortPriorityAscending(a, b) {
  if (a.priorityLevel !== b.priorityLevel) {
    return a.priorityLevel - b.priorityLevel
  }
  return sortNameAscending();
}

function sortPriorityDescending(a, b) {
  if (b.priorityLevel !== a.priorityLevel) {
    return b.priorityLevel - a.priorityLevel;
  }
  return sortNameDescending();
}
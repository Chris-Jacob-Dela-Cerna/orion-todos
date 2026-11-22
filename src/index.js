//   ===============================
//              IMPORTS
//   ===============================

import TodoCard from "./TodoCard.js";
import TodoItem from "./TodoItem.js";
import card from "./json-example.json" with { type: ".json" }

import "./styles.css";



//   ===============================
//              
//   ===============================

console.log(new TodoCard(card).priorityLevel);
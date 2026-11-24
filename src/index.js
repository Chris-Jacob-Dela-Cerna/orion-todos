//    ===============================
//               IMPORTS
//    ===============================

import { isBefore, isAfter, isEqual } from "date-fns";

import TodoDeck from "./TodoDeck.js";
import TodoCard from "./TodoCard.js";
import TodoItem from "./TodoItem.js";
import exampleDeck from "./json-example.json" with { type: ".json" }

import "./styles.css";



//    ===============================
//                 CORE
//    ===============================

console.log("\n\n\n\n\n\n\n\n\n\n");
const deck = new TodoDeck(exampleDeck);
console.log(deck);
deck.sort();
console.log(deck);
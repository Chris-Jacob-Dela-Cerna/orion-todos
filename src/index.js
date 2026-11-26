//    ===============================
//               IMPORTS
//    ===============================

import TodoDeck from "./TodoDeck.js";
import exampleDeck from "./json-example.json" with { type: ".json" }

import "./styles.css";



//    ===============================
//                 CORE
//    ===============================

const deck = new TodoDeck(exampleDeck);
console.log(deck);
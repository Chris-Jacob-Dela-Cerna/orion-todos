import Todo from "./TodoItem.js";
import sortingTable from "./sortingTable.js";

export default class TodoCard {

  #name;
  #lastModified;
  #sortBy;
  #todos;


  constructor({name, lastModified, sortBy, todos}) {
    this.name = name;
    this.lastModified = lastModified;
    this.sortBy = sortBy;
    this.todos = this.#parseTodos(todos);
  }


  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get lastModified() {
    return this.#lastModified;
  }
  set lastModified(lastModified) {
    this.#lastModified = lastModified;
  }

  get sortBy() {
    return this.#sortBy;
  }
  set sortBy(sortBy) {
    this.#sortBy = sortBy;
  }

  get todos() {
    return this.#todos;
  }
  set todos(todos) {
    this.#todos = todos;
  }

  sort() {
    this.todos.sort(sortingTable[this.sortBy]);
  }


  #parseTodos(todos) {
    return todos.map(todo => new Todo(todo));
  }

}
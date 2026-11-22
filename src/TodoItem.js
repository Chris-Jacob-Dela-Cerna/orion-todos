
export default class TodoItem {

  #name;
  #dueDate;
  #isChecked;
  #lastModified;
  #priorityLevel;


  constructor({name, dueDate, isChecked, lastModified, priorityLevel}) {
    this.name = name;
    this.dueDate = dueDate;
    this.isChecked = isChecked;
    this.lastModified = lastModified;
    this.priorityLevel = priorityLevel;
  }


  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get isChecked() {
    return this.#isChecked;
  }
  set isChecked(isChecked) {
    this.#isChecked = isChecked;
  }

  get lastModified() {
    return this.#lastModified;
  }
  set lastModified(lastModified) {
    this.#lastModified = lastModified;
  }

  get priorityLevel() {
    return this.#priorityLevel;
  }
  set priorityLevel(priorityLevel) {
    this.#priorityLevel = priorityLevel;
  }

}

export default class TodoCard {

  constructor({name, lastModified, sortBy, todos}) {
    this.name = name;
    this.lastModified = lastModified;
    this.sortBy = sortBy;
    this.todos = todos;
  }


  setName(newName) {
    this.name = newName;
  }

}
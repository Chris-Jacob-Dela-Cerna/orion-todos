import sortingTable from "./sortingTable.js";

export default class TodoDeck {

  #sortBy;
  #cards;


  constructor({sortBy, cards}) {
    this.sortBy = sortBy;
    this.cards = cards;
  }


  get sortBy() {
    return this.#sortBy;
  }
  set sortBy(sortBy) {
    this.#sortBy = sortBy;
  }

  get cards() {
    return this.#cards;
  }
  set cards(cards) {
    this.#cards = cards;
  }


  sort() {
    this.cards.sort(sortingTable[this.sortBy]);
  }

}
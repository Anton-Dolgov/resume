export default class Cards {
  constructor(data, html, section) {
    this._cardStructure = html;
    this._section = document.querySelector(section);
    this._data = data;
    this._generateCards();
  }

  _generateCards() {
    this._data.forEach((item) => this._addToSection(this._cardStructure(item)));
  }

  _addToSection(element) {
    this._section.insertAdjacentHTML("beforeend", element);
  }
}

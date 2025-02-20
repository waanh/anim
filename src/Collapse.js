export default class Collapse {
  constructor(selector) {
    console.log("Collapse инициализирован");

    this.container = document.querySelector(selector);
    if (!this.container) {
      console.error(`Элемент ${selector} не найден!`);
      return;
    }

    this.button = this.container.querySelector(".collapse-btn");
    this.content = this.container.querySelector(".collapse-content");

    if (!this.button || !this.content) {
      console.error("Кнопка или контент не найдены в контейнере!");
      return;
    }

    this.button.removeEventListener("click", this.toggle);
    this.toggle = this.toggle.bind(this);
    this.button.addEventListener("click", this.toggle);
  }

  toggle() {
    console.log("toggle() вызван!");

    if (this.content.style.maxHeight && this.content.style.maxHeight !== "0px") {
      console.log("Скрываем контент");
      this.content.style.maxHeight = "0px";
    } else {
      console.log("Разворачиваем контент");
      this.content.style.maxHeight = this.content.scrollHeight + "px";
    }
  }
}

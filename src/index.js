import Collapse from "./Collapse";
import "./styles.css";

if (!window.collapseInitialized) {
  window.collapseInitialized = true;

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded сработал!");
    new Collapse(".collapse-container");
  });
} else {
  console.warn("Collapse уже был инициализирован!");
}


// styles
import "../styles/index.css";

// scripts
import header from "./header.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

header();
home();

const navLinks = document.querySelectorAll("nav button");

for (const navLink of navLinks) {
  navLink.addEventListener("click", function () {
    clearContents();
    switch (this.id) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "contact":
        contact();
        break;
    }
  });
}

const clearContents = function () {
  const contents = document.querySelector("#content");
  contents.innerHTML = "";
};

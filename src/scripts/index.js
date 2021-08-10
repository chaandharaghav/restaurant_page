import "../styles/index.css";

function component() {
  const h1 = document.createElement("h1");
  h1.classList.add("red");
  h1.innerText = "I am red";

  const content = document.querySelector("#content");

  content.appendChild(h1);
}

component();

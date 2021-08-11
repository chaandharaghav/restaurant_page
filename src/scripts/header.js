export default function () {
  const title = document.createElement("h1");
  title.innerText = "Everyplate";

  const nav = document.createElement("nav");
  const home = createNavLink("Home", "home");
  const menu = createNavLink("Menu", "menu");
  const contact = createNavLink("Contact", "contact");

  const navDiv = document.createElement("div");
  navDiv.append(home, menu, contact);

  nav.append(title, navDiv);

  const body = document.querySelector("body");
  body.insertBefore(nav, body.firstChild);
}

const createNavLink = function (innerText, id) {
  const navLink = document.createElement("button");
  navLink.innerText = innerText;
  navLink.id = id;

  return navLink;
};

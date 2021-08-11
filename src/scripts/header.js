export default function () {
  const title = document.createElement("h1");
  title.innerText = "Everyplate";

  const nav = document.createElement("nav");
  const home = createNavLink("Home", "home");
  const menu = createNavLink("Menu", "menu");
  const contact = createNavLink("Contact", "contact");

  nav.append(home, menu, contact);

  const body = document.querySelector("body");
  body.insertBefore(nav, body.firstChild);
  body.insertBefore(title, body.firstChild);

  return "Done";
}

const createNavLink = function (innerText, id) {
  const navLink = document.createElement("button");
  navLink.innerText = innerText;
  navLink.id = id;

  return navLink;
};

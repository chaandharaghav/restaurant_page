import foodImage from "../img/contactImg.jpeg";

export default function () {
  const content = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.id = "contactDiv";

  const contactImg = document.createElement("img");
  contactImg.src = foodImage;
  contactImg.alt = "Restaurant image";

  const contactForm = document.createElement("form");
  contactForm.append(createInputDiv("text", "name"));
  contactForm.append(createInputDiv("email", "email"));
  contactForm.append(createInputDiv("text", "message"));

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Contact us";

  contactForm.append(submitBtn);

  contactDiv.append(contactImg, contactForm);
  content.append(contactDiv);
}

function createInputDiv(type, id) {
  const inputDiv = document.createElement("div");

  const inputLabel = document.createElement("label");
  inputLabel.htmlFor = id;
  inputLabel.innerText = capitalize(id);

  const input = document.createElement("input");
  input.type = type;
  input.id = id;

  inputDiv.append(inputLabel, input);
  return inputDiv;
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

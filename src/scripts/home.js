export default function () {
  const content = document.querySelector("#content");

  const tagLineDiv = document.createElement("div");
  tagLineDiv.id = "tagLine";

  const tagLine1 = document.createElement("span");
  tagLine1.innerText = "Eat.";
  const tagLine2 = document.createElement("span");
  tagLine2.innerText = "Delicious.";

  tagLineDiv.append(tagLine1, tagLine2);

  content.append(tagLineDiv);
}

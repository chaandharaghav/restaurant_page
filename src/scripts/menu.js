import burger from "../img/menu/burger.jpg";

export default function () {
  const content = document.querySelector("#content");

  const menuHeading = document.createElement("h2");
  menuHeading.innerText = "Our offerings";

  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";

  menuDiv.append(menuHeading);

  const foodItemsDiv = document.createElement("div");
  foodItemsDiv.id = "foodItems";

  for (let i = 0; i < 8; i++) {
    const foodDiv = createFoodDiv("Burger", burger, 12);
    foodItemsDiv.append(foodDiv);
  }

  menuDiv.append(foodItemsDiv);
  content.append(menuDiv);
}

function createFoodDiv(fName, imageSrc, fPrice) {
  const foodDiv = document.createElement("div");
  foodDiv.classList.add("foodDiv");

  const foodImg = document.createElement("img");
  foodImg.classList.add("foodImg");
  foodImg.src = imageSrc;

  const foodName = document.createElement("span");
  foodName.classList.add("foodName");
  foodName.innerText = fName;

  const foodPrice = document.createElement("span");
  foodPrice.classList.add("foodPrice");
  foodPrice.innerText = `$${fPrice}`;

  foodDiv.append(foodImg, foodName, foodPrice);

  return foodDiv;
}

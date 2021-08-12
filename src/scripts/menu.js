import burger from "../img/menu/burger.jpg";
import burritos from "../img/menu/burritos.jpeg";
import cake from "../img/menu/cake.jpg";
import cereals from "../img/menu/cereals.jpg";
import croissant from "../img/menu/croissant.jpg";
import italian from "../img/menu/italian.jpg";
import korean from "../img/menu/korean.jpg";
import omlette from "../img/menu/omlette.jpg";
import pakora from "../img/menu/pakora.jpg";
import pancakes from "../img/menu/pancakes.jpg";
import pizza from "../img/menu/pizza.jpg";
import salads from "../img/menu/salads.jpg";
import tempura from "../img/menu/tempura.jpg";
import thai from "../img/menu/thai.jpg";

export default function () {
  const content = document.querySelector("#content");

  const menuHeading = document.createElement("h2");
  menuHeading.innerText = "Our offerings";

  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";

  menuDiv.append(menuHeading);

  let foodItemsDiv = document.createElement("div");
  foodItemsDiv.id = "foodItems";

  foodItemsDiv = loadMenu(foodItemsDiv);

  menuDiv.append(foodItemsDiv);
  content.append(menuDiv);
}

function loadMenu(foodItemsDiv) {
  const dishes = [
    { name: "Burger", src: burger },
    { name: "Burritos", src: burritos },
    { name: "Cake", src: cake },
    { name: "Cereals", src: cereals },
    { name: "Crosissant", src: croissant },
    { name: "Italian", src: italian },
    { name: "Korean", src: korean },
    { name: "Omlette", src: omlette },
    { name: "Pakora", src: pakora },
    { name: "Pancakes", src: pancakes },
    { name: "Pizza", src: pizza },
    { name: "Salads", src: salads },
    { name: "Tempura", src: tempura },
    { name: "Thai", src: thai },
  ];

  for (let dish of dishes) {
    const foodDiv = createFoodDiv(dish.name, dish.src, createRandNum());
    foodItemsDiv.append(foodDiv);
  }

  return foodItemsDiv;

  // for (let i = 0; i < 8; i++) {
  //   const foodDiv = createFoodDiv("Burger", burger, 12);
  //   foodItemsDiv.append(foodDiv);
  // }
}

function createRandNum() {
  return Math.round(Math.random() * 20 + 10);
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

import { getChampagneById, deleteChampagneById } from "../utils/fetch.js";

const champagneWrapper = document.getElementById("champagne-wrapper");
const deleteBtn = document.getElementById("delete-btn");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const champagne = await getChampagneById(id);

const card = document.createElement("div");
card.classList.add("card");

const name = document.createElement("h2");
name.innerText = champagne.name;

const price = document.createElement("h4");
price.textContent = `Price: ${champagne.price} €`;

const description = document.createElement("h4");
description.innerText = `Description: ${champagne.description}`;

const location = document.createElement("h4");
location.innerText = `Location: ${champagne.location}`;

const image = document.createElement("img");
image.src = champagne.img;

card.append(name, price, description, location, image);
champagneWrapper.append(card);

const showDeleteMessage = () => {
  const msg = document.createElement("p");
  msg.textContent = "Champagne card was successfully removed";
  msg.style.color = "white";
  msg.style.fontSize = "20px";
  msg.style.marginTop = "20px";
  champagneWrapper.innerHTML = "";
  champagneWrapper.append(msg);
};

deleteBtn.addEventListener("click", async () => {
  const champagne = await deleteChampagneById(id);

  showDeleteMessage();

  setTimeout(() => {
    if (champagne) {
      window.location.replace("../index.html");
    }
  }, 2000);

  console.log(champagne);
});

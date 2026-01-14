import { buildScreen } from "./utils/fetch.js";

const champagneWrapper = document.getElementById("champagne-wrapper");

const champagne = await buildScreen();

champagne.sort((a, b) => a.price - b.price);

champagne.forEach((c) => {
  const card = document.createElement("a");
  card.classList.add("card");
  const link = `./champagne/index.html?id=${c.id}`;
  card.href = link;

  const name = document.createElement("h4");
  name.innerText = c.name;

  const price = document.createElement("h4");
  price.textContent = `Price: ${c.price} €`;

  const description = document.createElement("h4");
  description.innerText = `Description: ${c.description}`;

  const location = document.createElement("h5");
  location.innerText = c.location;

  const image = document.createElement("img");
  image.src = c.img;

  card.append(name, price, description, location, image);
  champagneWrapper.append(card);
});

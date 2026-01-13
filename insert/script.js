const sumbitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const locationInput = document.getElementById("location");
const imgInput = document.getElementById("img-url");
const message = document.getElementById("message");

sumbitBtn.addEventListener("click", async () => {
  if (
    nameInput.value.trim() === "" ||
    priceInput.value.trim() === "" ||
    descriptionInput.value.trim() === "" ||
    locationInput.value.trim() === "" ||
    imgInput.value.trim() === ""
  ) {
    message.textContent = "Please fill in all inputs";
    message.style.color = "red";
    message.style.opacity = "1";
    return;
  }

  const priceRegex = /^\d+(\.\d{1,2})?$/;

  if (!priceRegex.test(priceInput.value)) {
    message.textContent = "Please enter valid amount!";
    message.style.color = "red";
    message.style.opacity = "1";
    return;
  }

  if (isNaN(priceInput.value)) {
    message.textContent = "Please enter amount in Price input!";
    message.style.color = "red";
    message.style.opacity = "1";
    return;
  }

  const textRegex = /^[^\d]+$/;

  if (
    !textRegex.test(nameInput.value) ||
    !textRegex.test(descriptionInput.value) ||
    !textRegex.test(locationInput.value)
  ) {
    message.textContent =
      "Name, Description and Location must contain only letters!";
    message.style.color = "red";
    message.style.opacity = "1";
    return;
  }

  const champagne = {
    name: nameInput.value,
    price: priceInput.value,
    description: descriptionInput.value,
    location: locationInput.value,
    img: imgInput.value,
  };

  console.log(champagne);

  const response = await fetch(
    `https://6960b2dee7aa517cb796d5c0.mockapi.io/champagnes`,
    {
      method: "POST",
      body: JSON.stringify(champagne),
      headers: { "Content-Type": "application/json" },
    }
  );

  const champagneRes = await response.json();

  message.textContent = "Champagne added successfully!";
  message.style.color = "white";
  message.style.opacity = "1";

  setTimeout(() => {
    if (champagneRes) {
      window.location.replace("../index.html");
    }
  }, 2000);
});

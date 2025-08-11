const baseUrl = "http://localhost:3000/weather?address=";

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  userUrl = baseUrl + location;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(userUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("Error: " + data.error);
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = "Location: " + data.location;
        messageTwo.textContent = "Forecast: " + data.forecast;
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
  search.value = "";
});

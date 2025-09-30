function displayDestination(response) {
  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fb994d97ce3o8893t14c0f33a0f08b79";
  let prompt = `User instructions: Generate a list of four popular travel destinations found in ${instructionsInput.value}`;
  let context =
    "You are a well-travelled expert who is familiar with popular travel destinations within all European countries. Your mission is to generate a bulleted list of 4 popular destinations by following the user instructions. Please place a <br /> element between each bulleted item. Please sign 'SheCodes AI' inside a <strong> element at the bottom of the list.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating">⏳Generating list of destinations found in ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayDestination);
}

let travelFormElement = document.querySelector("#destination-generator");
travelFormElement.addEventListener("submit", generateDestination);

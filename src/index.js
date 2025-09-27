function generateDestination(event) {
  event.preventDefault();

  new Typewriter("#generated-destination", {
    strings: "Result will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let travelFormElement = document.querySelector("#destination-generator");
travelFormElement.addEventListener("submit", generateDestination);

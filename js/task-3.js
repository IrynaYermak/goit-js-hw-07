const input = document.getElementById("name-input");
const helloName = document.getElementById("name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  const inputName = event.target.value.trim();
  if (inputName !== "") {
    helloName.textContent = inputName;
  } else {
    helloName.textContent = "Anonymous";
  }
}

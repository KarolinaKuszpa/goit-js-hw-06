//dodaję do js input
const inputEl = document.getElementById("validation-input");
const inputLength = inputEl.dataset;

inputEl.addEventListener("blur", () => {
  inputEl.value.length === Number(inputLength.length)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
});

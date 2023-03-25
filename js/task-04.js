let counterValue = 0;

const decrementCount = document.querySelector("[data-action ='decrement']");
const incrementCount = document.querySelector("[data-action ='increment']");
const totalValue = document.querySelector("#value");
//dodaję zdarzenie:
decrementCount.addEventListener("click", () => {
  // wartość decrement spada o 1 wraz z kliknięciem myszki.
  counterValue--;
  totalValue.innerHTML = counterValue--;
});

incrementCount.addEventListener("click", () => {
  counterValue++;
  totalValue.innerHTML = counterValue++;
});

//counterValue -- -odejmie (decrement)
//counterValue ++ doda (increment)

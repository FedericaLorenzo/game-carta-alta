const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const cardYou = document.querySelector("#you span");
const cardCpu = document.querySelector("#cpu span");
const card1Background = document.getElementById("you");
const card2Background = document.getElementById("cpu");
const resultMessage = document.getElementById("message");

playButton.addEventListener("click", function () {
  card1Background.classList.add("active");
  card2Background.classList.add("active");

  const number1 = Math.floor(Math.random() * 10 + 1);
  const number2 = Math.floor(Math.random() * 10 + 1);

  // gli span sono stati inseriti perche' richiamando il div con id sovrascriveva lo span, non sapevo come richiamare il tag dello span senza id
  cardYou.innerHTML = number1;
  cardCpu.innerHTML = number2;

  //elemento fuori richiesta dell' esercizio: ho aggiunto un background con gif di fireworks, solo per provare cose extra
  card1Background.classList.remove("win");
  card2Background.classList.remove("win");

  if (number1 > number2) {
    resultMessage.innerHTML = "Hai vinto";
    card1Background.classList.add("win");
  } else if (number1 < number2) {
    resultMessage.innerHTML = "Hai perso";
    card2Background.classList.add("win");
  } else {
    resultMessage.innerHTML = "C'è un pareggio!";
  }
});

resetButton.addEventListener("click", function () {
  card1Background.classList.remove("active");
  card2Background.classList.remove("active");
  resultMessage.innerHTML = "";
  card1Background.classList.remove("win");
  card2Background.classList.remove("win");
});






const player1 = document.querySelector("#p1");
const score1 = document.querySelector("#button_1");
const player2 = document.querySelector("#p2");
const score2 = document.querySelector("#button_2");
const restart = document.querySelector("#restart");
const selection = document.querySelector("#select");

max_score = 3;
game_over = false;

var total_p1 = 0;
score1.addEventListener("click", () => {
  if (!game_over) {
    total_p1 += 1;
    if (total_p1 === Number(max_score)) {
      game_over = true;
    }
    player1.textContent = total_p1;
  }
});

var total_p2 = 0;
score2.addEventListener("click", () => {
  if (!game_over) {
    total_p2 += 1;
    if (total_p2 === Number(max_score)) {
      game_over = true;
    }
    player2.textContent = total_p2;
  }
});

restart.addEventListener("click", reset);

selection.addEventListener("change", () => {
  max_score = selection.value;
  reset();
});

function reset() {
  game_over = false;
  total_p1 = 0;
  total_p2 = 0;
  player1.textContent = 0;
  player2.textContent = 0;
}

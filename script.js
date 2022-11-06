function createGame(player1, hour, player2) {
  return `
        <li class="game">
            <img src="./assets/teams/${player1}.svg" alt="Bandeira ${player1}" />
            <h1 class="time">${hour}</h1>
            <img src="./assets/teams/${player2}.svg" alt="Bandeira ${player2}" />
        </li>
    `;
}

function createCard(date, day, games) {
  return `
    <section class="card">
        <div class="date">
            <h2>${date}</h2>
            <h3>${day}</h3>
        </div>

        <ul class="games">
            ${games}
        </ul>
    </section>
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/10",
    "quinta",
    createGame("switzerland", "7:00", "cameroon") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  );

function createGame(team1, hour, team2) {
    return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
    </li>
    `
}

let delay = -0.2;
function createCard(date, day, games) {
    delay = delay + 0.2;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + 
    createGame("uruguay", "10:00", "korea") + createGame("portugal", "13:00", "ghana") + 
    createGame("brazil", "16:00", "serbia")) +

    createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia") + 
    createGame("korea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")) +

    createCard("02/12", "sexta",createGame("korea", "07:00", "portugal") +
    createGame("ghana", "10:00", "uruguay") + createGame("serbia", "13:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil"))
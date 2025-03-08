```javascript
const playerForm = document.getElementById('player-form');
const playerList = document.getElementById('player-list');
const generateButton = document.getElementById('generate-games');
const gameList = document.getElementById('game-list');
const players = [];

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const playerName = document.getElementById('player-name').value;
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        const li = document.createElement('li');
        li.textContent = playerName;
        playerList.appendChild(li);
        document.getElementById('player-name').value = '';  // Reset the input
    } else {
        alert('Bitte gib einen gültigen Spielernamen ein!');
    }
});

generateButton.addEventListener('click', function() {
    if (players.length < 2) {
        alert('Es müssen mindestens 2 Spieler teilnehmen!');
        return;
    }
    
    const games = generateGames(players);
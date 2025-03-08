displayGames(games);
});

// Funktion zur Generierung der Spiele
function generateGames(players) {
    const games = [];
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            games.push([players[i], players[j]]);
        }
    }
    return games;
}

// Funktion zur Anzeige der Spiele
function displayGames(games) {
    gameList.innerHTML = '';  // Clear previous games
    games.forEach(function(game, index) {
        const div = document.createElement('div');
        div.textContent = Spiel index + 1:{game[0]} vs ${game[1]};
        gameList.appendChild(div);
    });
}
```

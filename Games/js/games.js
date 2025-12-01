function searchGames() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const games = document.querySelectorAll('.game-item');
    
    games.forEach(game => {
        const name = game.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
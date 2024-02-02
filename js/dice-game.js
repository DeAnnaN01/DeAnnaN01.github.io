function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You have rolled a ' + roll + '!\n\nYour gold coin balance is ' + goldCoins + '.');
        if (roll == 1) {
            alert('Game over! No more rolls.');
            break;
        } else if (roll < 4) {
            continue;
        } else if (roll == 4) {
            if (goldCoins > 0) {
                alert('You have lost 1 gold coin.');
                goldCoins -= 1;
            } else {
                continue;
            }
        } else {
            alert('Congratualations! You have won ' + roll + ' coins!');
            goldCoins += roll;            
        }
    }
    alert('You have a total of ' + goldCoins + ' gold coins!');
}
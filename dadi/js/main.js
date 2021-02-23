//variabile submit
var submit = document.getElementById('submit');

// funzione dadi
submit.addEventListener('click', 
    function() {
        //variabili utente e pc
        var userDice = Math.floor(Math.random() * 6) + 1;
        var pcDice = Math.floor(Math.random() * 6) + 1;

        // var vincitore
        var winner = document.getElementById('winner');
        winner.className = '';

        //stampa le due var
        document.getElementById('userDice').innerHTML = ('Ti è uscito ' + userDice);
        document.getElementById('pcDice').innerHTML = ('Al pc è uscito ' + pcDice);

        //confronto tra le 2 variabili
        if(userDice == pcDice) {
            document.getElementById('winner').innerHTML = "Avete pareggiato";
        } else if (userDice > pcDice) {
            winner.className = "ms_success";
            document.getElementById('winner').innerHTML = "Hai vinto!";
        } else {
            winner.className = "ms_error";
            document.getElementById('winner').innerHTML = "Hai perso";
        }
    }
);
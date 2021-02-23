//variabile submit
var submit = document.getElementById('submit');
let winContUser = 0;
let winContPc = 0;

// funzione dadi
submit.addEventListener('click', 
    function() {
        //variabili utente e pc
        var userDice = Math.floor(Math.random() * 6) + 1;
        var pcDice = Math.floor(Math.random() * 6) + 1;

        // var vincitore
        var winner = document.getElementById('winner');
        winner.className = '';

        //immagini dadi
        var userDiceImg = "img/dado" + userDice + ".png";
        var pcDiceImg = "img/dado" + pcDice + ".png";
        document.getElementById('userDiceImg').setAttribute('src', userDiceImg);
        document.getElementById('pcDiceImg').setAttribute('src', pcDiceImg);

        //stampa le due var
        document.getElementById('userDice').innerHTML = ('Ti è uscito ' + userDice);
        document.getElementById('pcDice').innerHTML = ('Al pc è uscito ' + pcDice);

        //confronto tra le 2 variabili
        if(userDice == pcDice) {
            document.getElementById('winner').innerHTML = "Avete pareggiato";
        } else if (userDice > pcDice) {
            winner.className = "ms_success";
            document.getElementById('winner').innerHTML = "Hai vinto!";
            winContUser++;
            document.getElementById('userWins').innerHTML = winContUser;
        } else {
            winner.className = "ms_error";
            document.getElementById('winner').innerHTML = "Hai perso";
            winContPc++;
            document.getElementById('pcWins').innerHTML = winContPc;
        }
    }
);
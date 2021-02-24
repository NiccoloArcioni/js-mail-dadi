// array delle email che hanno accesso
const emailList = [
    "a@gmail.com",
    "d@virgilio.it",
    "b@gmail.com",
    "c@virgilio.it",
    "e@gmail.com",
    "g@outlook.com",
    "f@virgilio.it",
    "h@outlook.com"
];

//inizializzazione variabile submit
var submit = document.getElementById('submit');

//controllo se userEmail è presente nell'array
submit.addEventListener('click', 
    function() {
        // inizializzazione variabile email utente
        var userEmail = document.getElementById('email').value;
        console.log(userEmail);

        //inizializzazione variabile messaggio di uscita
        var emailControll = document.getElementById('ms_email');

        //booleano per il confronto
        var emailTrovara = false;

        //confronto email con array
        for (var i = 0; i < emailList.length; i++) {
            if (emailList[i] === userEmail) {
                emailTrovara = true;
            }
        }

        //stampa messaggio
        if (emailTrovara == true) {
            document.getElementById('ms_success_check').style.display = 'block';
            document.getElementById('ms_error_cross').style.display = 'none';
            emailControll.className = "ms_success";
            document.getElementById('ms_email').innerHTML = ("La tua email è presente nel nostro archivio. Puoi accedere");
        } else {
            document.getElementById('ms_success_check').style.display = 'none';
            document.getElementById('ms_error_cross').style.display = 'block';
            emailControll.className = "ms_error";
            document.getElementById('ms_email').innerHTML = ("La tua email non è presente nel nostro archivio.");
        }
    }
);

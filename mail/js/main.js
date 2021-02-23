// array delle email che hanno accesso
const emailList = [
    "a@gmail.com",
    "b@gmail.com",
    "c@virgilio.it",
    "d@virgilio.it",
    "e@gmail.com",
    "f@virgilio.it",
    "g@outlook.com",
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

        //confronto email con array
        for (var i = 0; i < emailList.length; i++)
            if (emailList[i] == userEmail) {
                emailControll.className = "ms_success";
                document.getElementById('ms_email').innerHTML = ("La tua email è presente nel nostro archivio. Puoi accedere");
                break;
            } else {
                emailControll.className = "ms_error";
                document.getElementById('ms_email').innerHTML = ("La tua email non è presente nel nostro archivio.")
            }
    }
)
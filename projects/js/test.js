function clickButton() {

    document.getElementById('ausgabe').innerHTML = event.target.innerHTML

    console.log("I've been clicked: " + event.target.innerHTML)
}


//Ereignisbehandlung initialisieren (nach der clickButton-Funktion)
let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = clickButton
}
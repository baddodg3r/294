// Erstelle ein leeres Array "einkaufsliste"
let einkaufsliste = [];
console.log(einkaufsliste);

// Befülle die Einkaufsliste mit Milch, Brot und Äpfeln
einkaufsliste.push("Milch", "Brot", "Äpfel", "Käse");
console.log(einkaufsliste);
console.log("Die Länge der Einkaufsliste ist: " + einkaufsliste.length);

// Gib die erste Position des Array aus
console.log(einkaufsliste[0]);

// Gib die dritte Position des Array aus
// Erstelle Variable für das letzte Element
let lastE = einkaufsliste.length - 1;
console.log(lastE);
console.log(einkaufsliste[lastE]);

//entferne ersten Artikel von der Einkaufsliste
einkaufsliste.shift(0);
console.log(einkaufsliste);

// Entferne das letzte Element aus dem Array
einkaufsliste.pop();
console.log(einkaufsliste);

//Neue Artikel hinzufügen "Wurst", "Eier"
einkaufsliste.push("Wurst", "Eier");
console.log(einkaufsliste);

//Ersetze "Äpfel" mit "Birnen"
let index = einkaufsliste.indexOf("Äpfel");
if (index !== -1) {
    einkaufsliste[index] = "Birnen";
}
console.log("Die Finale Liste: " + einkaufsliste);

let todos = ["Hausaufgaben machen", "Zimmer aufräumen", "Sport treiben"];
console.log(todos);

let todos_index = todos.indexOf("Zimmer aufräumen") + 1;
todos.splice(todos_index, 0, "Freunde anrufen");

console.log(todos);




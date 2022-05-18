/*
Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
 Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
 Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
 Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

 Input:
 - 3 arrays
Output:
- 3 integers
- in de console
- 3 buttons
- op de pagina

Stappen:
-importeer de arrays
-maak 3 functies
-Maak button elementen
-Voeg de button elementen toe aan de pagina
-Luister naar een clickevent
-Roep de functie aan bij listener
-Zet de listener op main.js
 */

export const showPrice = (arrayPrice) => {
    console.log(arrayPrice);
}

export const showAmbi = (arrayAmbi) => {
    console.log(arrayAmbi);
}

export const showSold = (arraySold) => {
    console.log(arraySold);
}

export const buttonElement1 = document.createElement('button');
buttonElement1.textContent = "Sorteer op prijs";
document.body.appendChild(buttonElement1);
export const buttonElement2 = document.createElement('button');
buttonElement2.textContent = "AmbiLight Tv's";
document.body.appendChild(buttonElement2);
export const buttonElement3 = document.createElement('button');
buttonElement3.textContent = "Uitverkochte exemplaren";
document.body.appendChild(buttonElement3);

/*
Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd,
 dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

 Antwoord -> zie main.js
 */

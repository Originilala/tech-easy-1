import inventory from "./inventory.js";

/*
Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console

    pseudo code

Input:
-Array

Output:
-Een getal
-Log in de console

Stappen:
-Loop door array
-Selecteer bij iedere entry de totaal aantal verkochte tv's
-Sla de aantallen op
-Tel ze bij elkaar op
*/

let totalSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold;
}

export const totalSoldLog = totalSold;

/*
Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

    pseudo code

Input:
-Integer

Output:
-Een getal
-Een attribuut
-Op de pagina

Stappen:
-Een element creeren
-Getal in element opslaan
-Style attribuut van het element aanpassen naar css klasse voor groen
-Element aan de dom toevoegen
-css klasse met kleur groen aanmaken
*/

const totalSoldElement = document.createElement('h2');
totalSoldElement.textContent = totalSoldLog;
totalSoldElement.setAttribute('class', 'green-text');
document.body.appendChild(totalSoldElement);

/*
Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

    pseudo code

Input:
-Array

Output:
-Een getal
-Log in de console

Stappen:
-Loop door array
-Selecteer bij iedere entry de totaal ingekochte tv's
-Sla de aantallen op
-Tel ze bij elkaar op
*/

let totalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    totalStock += inventory[i].originalStock;
}

export const totalStockLog = totalStock;

/*
Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

    pseudo code

Input:
-Integer

Output:
-Een getal
-Een attribuut
-Op de pagina

Stappen:
-Een element creeren
-Getal in element opslaan
-Style attribuut van het element aanpassen naar css klasse voor blauw
-Element aan de dom toevoegen
-css klasse met kleur blauw aanmaken
*/

const totalStockElement = document.createElement('h2');
totalStockElement.textContent = totalStockLog;
totalStockElement.setAttribute('class', 'blue-text');
document.body.appendChild(totalStockElement);

/*
Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

pseudo code

Input:
-Integer
-Integer

Output:
-Een getal
- Een attribuut
- Op de pagina

Stappen:
-Getal ingekochte tv's verminderen met getal verkochte tv's
-Het getal opslaan
-Een element creeren
-Getal in element opslaan
-Style attribuut van het element aanpassen naar css klasse voor rood
-Element aan de dom toevoegen
-css klasse met kleur rood aanmaken
*/

const totalToBeSold = totalStockLog - totalSoldLog;
const totalToBeSoldElement = document.createElement('h2');
totalToBeSoldElement.textContent = totalToBeSold;
totalToBeSoldElement.setAttribute('class', 'red-text');
document.body.appendChild(totalToBeSoldElement);


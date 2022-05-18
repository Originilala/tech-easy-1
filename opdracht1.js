import inventory from "./inventory.js";

/*
Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

    pseudo code

Input:
-Array

Output:
-Array met entries met tv type namen
-Log in de console

Stappen:
-Loop door array
-Selecteer bij iedere entry de tv type naam
-Sla de tv type naam op
-Maak van alle tv type namen een array
*/

export const tvTypes = inventory.map((entry)=>{
    return entry.type;
});

/*
Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

    pseudo code

Input:
-Array

Output:
-Array met objecten van uitverkochte tv's
-Log in de console

Stappen:
-Loop door array
-Check bij iedere entry of de tv uitverkocht is
-Sla de tv object op
-Maak van alle tv objecten een array
*/

export const tvSold = inventory.filter((entry) => {
    return entry.sold === entry.originalStock;
});

/*
Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
    pseudo code

Input:
-Array

Output:
-Array met objecten met ambilight tv's
-Log in de console

Stappen:
-Loop door array
-Check bij iedere entry of de tv ambilight heeft
-Sla de tv object op
-Maak van alle tv objecten een array
*/

export const tvAmbi = inventory.filter((entry) => {
    return entry.options.ambiLight;
});

/*
Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
   pseudo code

Input:
-Array

Output:
-Array met objecten gesorteerd naar prijs
-Log in de console

Stappen:
-Loop door array
-Check bij iedere entry of de tv een hogere prijs heeft
-Sla de tv object op
-Maak van alle tv objecten een array
*/

export const tvPriceSort = inventory.sort((a, b) => {
    return a.price - b.price;
});
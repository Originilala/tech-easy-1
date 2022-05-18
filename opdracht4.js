/* Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

Input:
-Object

Output:
-String

Stappen:
-Sla functie op in een variabele
-Maak een parameter voor een object
-Return een string met string literals


 */

import inventory from "./inventory.js";

const displayTV = (tvobject) => {
    return `${tvobject.brand} ${tvobject.type} - ${tvobject.name}`
}

/*
Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

Input:
-Integer

Output:
-String

Stappen:
-Sla functie op in een variabele
-Maak een parameter voor een integer
-Return een string met string literals

 */

const priceTV = (tvprice) => {
    return `€${tvprice},-`;
}

/*
Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
 x2.54

 Input:
 -array
 Output:
 -string
 Stappen:
 -Loop door de array
 -Sla iedere grootte op met inch en cm text erachter
 -Voeg een '|' toe bij meer dan 1 schermen


*/

const tvScreens = (allSizes) => {
    const tvSizes = allSizes.map((size) => {
        return `${size} inch (${Math.round((size * 2.54))} cm)`
    })
    return tvSizes.join(" | ")
}


/* Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

 Input:
 -Object

 Output:
 -String
 -Op de pagina

 Stappen:
 -Maak een nieuw element
 -Gebruik de functie displaytv om de naam van de tv erin te doen
 -Voeg het element toe aan de pagina
 -Maak een nieuw element
 -Gebruik de functie pricetv om de prijs van de tv erin te doen
 -Voeg het element toe aan de pagina
 --Maak een nieuw element
 -Gebruik de functie tv screens om de formaten van de tv erin te doen
 -Voeg het element toe aan de pagina

 */

let addTvName = document.createElement('p');
addTvName.textContent = displayTV(inventory[0]);
document.body.appendChild(addTvName);
let addTvPrice = document.createElement('p');
addTvPrice.textContent = priceTV(inventory[0].price);
document.body.appendChild(addTvPrice);
let addTvScreenSizes = document.createElement('p');
addTvScreenSizes.textContent = tvScreens(inventory[0].availableSizes);
document.body.appendChild(addTvScreenSizes);

/*
Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

Input:
-array

Output:
-string
-op de pagina

Stappen:
-loop over de array met map
-Voor iedere Entry:-Maak een nieuw element
 -Gebruik de functie displaytv om de naam van de tv erin te doen
 -Voeg het element toe aan de pagina
 -Maak een nieuw element
 -Gebruik de functie pricetv om de prijs van de tv erin te doen
 -Voeg het element toe aan de pagina
 --Maak een nieuw element
 -Gebruik de functie tv screens om de formaten van de tv erin te doen
 -Voeg het element toe aan de pagina
-Exporteer de functienaam
-Roep aan in main


 */

export const tvFun = (inventoryarray) => {
    const tvNameElement = document.createElement('div');
    document.body.appendChild(tvNameElement);
    const tvDummy = inventoryarray.map((entry) => {
        let addTvName = document.createElement('p');
        addTvName.textContent = displayTV(entry);
        tvNameElement.appendChild(addTvName);
        let addTvPrice = document.createElement('p');
        addTvPrice.textContent = priceTV(entry.price);
        tvNameElement.appendChild(addTvPrice);
        let addTvScreenSizes = document.createElement('p');
        addTvScreenSizes.textContent = tvScreens(entry.availableSizes);
        tvNameElement.appendChild(addTvScreenSizes);
    });
}

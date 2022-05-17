import inventory from "./inventory.js";

/*
Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

pseudo code

Input:
-Een array

Output:
-Een array
-Op de pagina

Stappen:
-Loop door array
-Alle tv merken opslaan in nieuwe array
-Een element creeren
-Array in element opslaan
-Element aan de dom toevoegen
*/

const tvBrands = inventory.map((entry) =>{
    return entry.brand;
});
const tvBrandElement = document.createElement('ul');
document.body.appendChild(tvBrandElement);
for (let i = 0; i < tvBrands.length; i++) {
    let tvBrandList = document.createElement('li');
    tvBrandList.textContent = tvBrands[i];
    tvBrandElement.appendChild(tvBrandList);
}

/*
Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

    pseudo code

Input:
-Een script

Output:
-Een functie
-Op de main.js

Stappen:
-Sla functie op in variabele
-Maak een parameter voor een array
-Voe een return statement toe
-Exporteer de variabele
-Roep aan in main.js
*/

export const tvBrandsFun = (inventoryarray) => {
    const tvBrand = inventoryarray.map((entry) =>{
        return entry.brand;
    });
    const tvBrandElement = document.createElement('ul');
    document.body.appendChild(tvBrandElement);
    for (let i = 0; i < tvBrand.length; i++) {
        let tvBrandList = document.createElement('li');
        tvBrandList.textContent = tvBrand[i];
        tvBrandElement.appendChild(tvBrandList);
    }
}
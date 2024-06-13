const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  /*Vypište do stránky všechna čísla.*/
  document.body.innerHTML += "1. Všechna čísla jsou: " + numbers + '<br/>';


//Vypište do stránky druhé mocniny všech čísel.//
const druhaMocnina = numbers.map((cislo) => Math.pow(cislo,2));
document.body.innerHTML += "2. Druhé mocniny všech čísel jsou: " + druhaMocnina + '<br/>';


//Vypište do stránky pouze záporná čísla.//
let zapornaCisla = [];
numbers.forEach ((cislo) => {if
  (cislo < 0) {zapornaCisla.push(cislo)}
});
document.body.innerHTML += "3. Všechna záporná čísla jsou: " + zapornaCisla + '<br/>';


// Vypište do stránky absolutní hodnotu všech čísel.//
const absolutniHodnota = numbers.map((cislo) => Math.abs(cislo));
document.body.innerHTML += "4. Absolutní hodnoty všech čísel jsou: " + absolutniHodnota + '<br/>';

//Vypište do stránky pouze sudá čísla.//
let sudaCisla = [];
numbers.forEach ((cislo) => {if (cislo % 2 === 0) {sudaCisla.push(cislo)}});
document.body.innerHTML += "5. Všechna sudá čísla jsou: " + sudaCisla + '<br/>';


//Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.//
let absTri = [];
numbers.forEach ((cislo) => {if (Math.abs(cislo) % 3 === 0) {absTri.push(cislo)}});
document.body.innerHTML += "6. Všechna čísla, jejichž absolutní hodnota je dělitená třemi, jsou: " + absTri + '<br/>';


//Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.//
const odPetky = numbers.map((cislo) => (cislo - 5));
document.body.innerHTML += "7. Vzdálenost čísel od čísla 5 (bez absolutní hodnoty): " + odPetky + '<br/>';


//Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.//

const druhaMocninaOdPetky = odPetky.map((cislo) => Math.pow(cislo,2));
document.body.innerHTML += "8. Druhé mocniny vzdáleností všech čísel od čísla 5: " + druhaMocninaOdPetky + '<br/>';


 //Spočítejte, kolik je v seznamu záporných čísel.//
 let sumZapor = 0
 numbers.forEach ((cislo) => {if (cislo < 0) {sumZapor += 1}});
 document.body.innerHTML += "9. Počet záporných čísel: " + sumZapor+ '<br/>';


//Spočítejte součet všech čísel v poli.//
let sum = 0
numbers.forEach ((cislo) => sum += cislo);
document.body.innerHTML += "10. Součet všech čísel je: " + sum + '<br/>';

//Spočítejte průměr všech čísel v poli.//
let prumer = 0;
numbers.forEach((cislo) => { prumer += cislo });
average = prumer / numbers.length;
document.body.innerHTML += "11. Průměr všech čísel je : " + average + '<br/>';



 //Spočítejte součet všech kladných čísel v poli.//

let sumKlad = 0
numbers.forEach ((cislo) => {if (cislo > 0) {sumKlad += cislo}});
document.body.innerHTML += "12. Součet všech kladných čísel je: " + sumKlad + '<br/>';

 

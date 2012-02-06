/*
 * Det här är ett JavaScript-kladdblock.
 *
 * Skriv in lite JavaScript, högerklicka eller välj från Kör-menyn:
 * 1. Kör för att evaluera den markerade texten,
 * 2. Inspektera för att öppna en objektinspektör på resultatet, eller
 * 3. Visa för att infoga resultatet i en kommentar efter markeringen.
 */

// Uppgift d - introduktion av konsollen
// Konsollen är mindre störande än alert
// var the_king = "Karl XVI Gustaf";
// console.log("Kungen är " + the_king);
// CTRL + SHIFT + K samt CTRL + R

// console.log("Lilla kungen är " + the_king.toLowerCase());
// console.log("Stora kungen är " + the_king.toUpperCase());

// Uppgift e - if - else
var name = "Jonas";
if ( name.length > 5 ) {
    console.log("Ditt namn har mer än 5 tecken");
} else if ( name.length === 5 ) {
    console.log("Ditt namn innehåller precis 5 tecken ");
} else {
    console.log("Ditt namn innehåller färre än 5 tecken");
}

// Uppgift f - en enkel loop
var eman = "", i = 1, len = name.length;
while ( i <= len ) {
    eman += name[len - i];
    console.log(eman);
    i += 1;
}
console.log("Namnet baklänges blir '" + eman + "'");

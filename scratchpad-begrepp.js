




/*
 * Det här är ett JavaScript-kladdblock.
 *
 * Skriv in lite JavaScript, högerklicka eller välj från Kör-menyn:
 * 1. Kör för att evaluera den markerade texten,
 * 2. Inspektera för att öppna en objektinspektör på resultatet, eller
 * 3. Visa för att infoga resultatet i en kommentar efter markeringen.
 */
 
/*
function dubbla(x) {
    return 2 * x;
}
console.log(dubbla(3));
console.log(dubbla(12));
console.log(dubbla(Math.PI));

var halvera = function(x) {
    return x / 2;
}
*/

var a = 10;
function kvadrat(x) {
    a = a * a;  // global variabel
}
kvadrat(88);
console.log(a);

var b = 10;
function kubik(x) {
    var b;  // lokal variabel
    b = b * b * b;
}
console.log(b);
kubik(b);
console.log(b);



let c = 5;
{
    let c = 10;
    console.log(c);
}
console.log(c);

// self executing/invoking anonymous function
(function () {
    // Code goes here
}());















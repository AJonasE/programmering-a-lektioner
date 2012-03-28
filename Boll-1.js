var draw = startCanvas("maincanvas");


// field för bollen att studsa inom
var field = {
    x : 100,
    y : 50,
    width : 600,
    height : 350
};

draw.strokeRect(field.x, field.y, field.width, field.height, "maroon");

// Värden för en cirkel = bollen
// Den startar i mitten
// Vinkeln är mellan 0 och 2 pi
var ball = {
    x : field.x + field.width / 2,
    y : field.y + field.height / 2,
    r : 10,
    totspeed : 10,
    color : "red",
    angle : Math.random() * Math.PI *2,
    isMoving : false
};
// Räknas om när farten ändras eller vinkeln ändras
ball.xSpeed = Math.cos(ball.angle) * ball.totspeed;
ball.ySpeed = Math.sin(ball.angle) * ball.totspeed;

console.log(ball);

function moveBall() {
    // Rensa först spelplanen = radera bollen i dess förra position
    draw.clearRect(field.x, field.y, field.width, field.height);

    // Kollisionsdetektera
    if ( ball.x < (field.x + ball.r / 2) ) {
          ball.xSpeed = Math.abs(ball.xSpeed);
    }   else if ( ball.x > (field.x + field.width - ball.r / 2) ) {
          ball.xSpeed = -Math.abs(ball.xSpeed);
    }   else if ( ball.y < (field.y + ball.r / 2) ) {
          ball.ySpeed = Math.abs(ball.ySpeed);
    }   else if ( ball.y > (field.y + field.height - ball.r / 2) ) {
          ball.ySpeed = -Math.abs(ball.ySpeed);
    }


    // Räkna ut ny placering av bollen
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
    draw.circle(ball.x, ball.y, ball.r, ball.color);
    // console.log(ball.angle * 180 / Math.PI);
    if ( ball.isMoving ) {
        // Om man tar bort denna flyttar bollen ett steg per klick
        setTimeout(moveBall, 20);
    }
}
moveBall();
// Start
document.getElementById("start").onclick = function () {
    ball.isMoving = true;
    moveBall();
};
// Stopp
document.getElementById("stop").onclick = function () {
    ball.isMoving = false;
};















    

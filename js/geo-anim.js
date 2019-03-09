var canvas = document.getElementById('anim-canvas');
var ctx = canvas.getContext('2d');
var sbj = document.getElementById('anim-subject');
var animationFarme;
ctx.fillStyle = '#c1c1c1';
start();



function start() {
    animationFarme = circleAnim;
    drawCircle();
    circleAnim();

}

// ---- DRAW ---- //

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i=0; i<360; i+=.25) {
        ctx.fillRect(Math.cos(i)*canvas.width/2 + canvas.width/2, Math.sin(i)*canvas.width/2 + canvas.width/2,  1, 1);
    }
}
function drawRose() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i=0; i<360; i+=.25) {
        var r = canvas.width/2*Math.cos(1.5*i);
        ctx.fillRect(Math.cos(i)*r + canvas.width/2, Math.sin(i)*r + canvas.width/2,  1, 1);
    }
}
function drawLimacon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i=0; i<360; i+=.25) {
        var r = canvas.width/8 + canvas.width/4*3 * (Math.sin(i));
        ctx.fillRect(Math.cos(i)*r + canvas.width/2, Math.sin(i)*r ,  1, 1);
    }
}
function drawLemiscate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i=0; i<360; i+=.25) {
        var r = canvas.width/2 * Math.sqrt(Math.cos(2*i));
        ctx.fillRect(Math.cos(i)*r + canvas.width/2, canvas.width/2 + Math.sin(i)*r ,  1, 1);
    }
}




//  ---- ANIM ---- //

function circleAnim(i=0) {
    sbj.style.left = canvas.width/2*Math.cos(i) + 'px';
    sbj.style.top = canvas.height/2*Math.sin(i) + 'px';
    requestAnimationFrame(function() {animationFarme(i+0.05)});
}
function roseAnim(i=0) {
    var r = canvas.width/2*Math.cos(1.5*i);
    sbj.style.left = r*Math.cos(i) + 'px';
    sbj.style.top = r*Math.sin(i) + 'px';
    requestAnimationFrame(function() {animationFarme(i+0.05)});
}
function jumpAnim(i = 0) {
    var r = canvas.width/4 * ( 1 - Math.sin(i));
    sbj.style.top =  r*Math.sin(i) + 'px';
    requestAnimationFrame(function() {animationFarme(i+0.05)});
}
function limaconAnim(i=0) {
    var r = canvas.width/8 + canvas.width/4*3 * (Math.sin(i));
    sbj.style.left = r*Math.cos(i) + 'px';
    sbj.style.top = r*Math.sin(i) - canvas.width/2 + 'px';
    requestAnimationFrame(function() {animationFarme(i+0.05)});
}
function lemniscateAnim(i=0) {
    var r = canvas.width/2 * Math.sqrt(Math.cos(2*i));
    sbj.style.left = Math.round(r*Math.cos(i)) + 'px';
    sbj.style.top = Math.round(r*Math.sin(i)) + 'px';
    requestAnimationFrame(function() {animationFarme(i+0.05)});
}


// ---- ACTIONS ---- //

function startCircle() {
    drawCircle();
    animationFarme = circleAnim;
}
function startRose() {
    drawRose();
    animationFarme = roseAnim;
}
function startlimacon() {
    drawLimacon();
    animationFarme = limaconAnim;
}
function startLemiscate() {
    drawLemiscate();
    animationFarme = lemniscateAnim;
}
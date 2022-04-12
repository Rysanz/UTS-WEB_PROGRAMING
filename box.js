let box1 = document.getElementById('box1');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box1.style.left = x - (box1.clientWidth/2) + "px";
    box1.style.top = y - (box1.clientWidth/2) + "px";

}

function random(number) {
    return Math.floor(Math.random()* number)
}

document.onclick = function () {
acak = "rgb(" + random(255) +"," + random(255) +"," +random(255) + ")";
box1.style.background = acak

}
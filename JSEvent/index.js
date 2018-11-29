document.getElementById("myDIV").addEventListener("mousemove", function(event) {
    myFunction(event);
});

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var xcoor = x;
    var ycoor = y;
    document.getElementById("x").innerHTML = xcoor;
    document.getElementById("y").innerHTML = ycoor;
}

document.addEventListener('keydown', zeroout);

function zeroout() {
    var keycode = event.which || event.keyCode;
    if(keycode == 67){
    x = 0;
    y = 0;
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    }
}
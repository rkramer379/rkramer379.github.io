
var sum = document.getElementById("one");
var diff = document.getElementById("two");
var pro = document.getElementById("three");
var quo = document.getElementById("four");

function Calc(x, y){
    sum.textContent =  x + y;
    diff.textContent = x - y;
    pro.textContent = x * y;
    quo.textContent = x/y;
}

var x = Math.floor(Math.random() * 101)
var y = Math.floor(Math.random() * 101)

Calc(x, y);
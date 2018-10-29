
var arr = ["one", "two", "three", "four", "five", "six"];

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

var item = Math.floor(Math.random() * 6)
one.textContent = arr[item];

var item = Math.floor(Math.random() * 6)
two.textContent = arr[item];

var item = Math.floor(Math.random() * 6)
three.textContent = arr[item];

var item = Math.floor(Math.random() * 6)
four.textContent = arr[item];
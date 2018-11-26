var listItems = [];

var firsth = document.querySelector("h1.first");
firsth.innerHTML = "<i><b> Hello World </b></i>";

listItems = document.getElementsByTagName("li");
listItems[0].parentNode.setAttribute("class", "first");

var lstItem = document.createElement("li");
var randomtext = document.createTextNode("DOLLAR COINS");
lstItem.appendChild(randomtext);
listItems[0].parentNode.appendChild(lstItem);
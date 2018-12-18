var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");

row1.style.cursor = "pointer";
row2.style.cursor = "pointer";
row3.style.cursor = "pointer";
row4.style.cursor = "pointer";

row1.addEventListener("click", click1, false);
row2.addEventListener("click", click2, false);
row3.addEventListener("click", click3, false);
row4.addEventListener("click", click4, false);

row1.addEventListener("mouseover", hover, false);
row2.addEventListener("mouseover", hover2, false);
row3.addEventListener("mouseover", hover3, false);
row4.addEventListener("mouseover", hover4, false);

row1.addEventListener("mouseout", unhover, false);
row2.addEventListener("mouseout", unhover2, false);
row3.addEventListener("mouseout", unhover3, false);
row4.addEventListener("mouseout", unhover4, false);

function click1() {
  window.location =
    "https://apstudent.collegeboard.org/apcourse/ap-world-history";
}
function click2() {
  window.location = "https://youtu.be/Yocja_N5s1I";
}
function click3() {
  window.location =
    "https://video.nationalgeographic.com/video/history-civilization";
}
function click4() {
  window.location =
    "https://drive.google.com/open?id=1CG4oP6BE6U0shoM7Wf2b2PzKK0Z9EmTf";
}
function hover() {
  row1.classList.add("hover");
}
function hover2() {
  row2.classList.add("hover");
}
function hover3() {
  row3.classList.add("hover");
}
function hover4() {
  row4.classList.add("hover");
}
function unhover() {
  row1.classList.remove("hover");
}
function unhover2() {
  row2.classList.remove("hover");
}
function unhover3() {
  row3.classList.remove("hover");
}
function unhover4() {
  row4.classList.remove("hover");
}

var margint = document.getElementById("margint");
var homeworkt = document.getElementById("homeworkt");
var resourcet = document.getElementById("resourcet");

margint.style.cursor = "pointer";
homeworkt.style.cursor = "pointer";
resourcet.style.cursor = "pointer";

homeworkt.addEventListener("click", homework, false);
maringt.addEventListener("click", margin, false);
resourcet.addEventListener("click", resource, false);

function homework() {
  window.location = "hw.html";
}
function margin() {
  window.location = "margin.html";
}
function resource() {
  window.location = "resource.html";
}

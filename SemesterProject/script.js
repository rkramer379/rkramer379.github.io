var clicks = [];
var content = [];
for(var i =1; i < 11; i++){
    clicks[i] = document.getElementById("click" + i)
    content[i] = document.getElementById("div" + i)
}

clicks[1].addEventListener('click', function(){
    Switch(content[1])
})
clicks[2].addEventListener('click', function(){
    Switch(content[2])
})
clicks[3].addEventListener('click', function(){
    Switch(content[3])
})
clicks[4].addEventListener('click', function(){
    Switch(content[4])
})
clicks[5].addEventListener('click', function(){
    Switch(content[5])
})
clicks[6].addEventListener('click', function(){
    Switch(content[6])
})
clicks[7].addEventListener('click', function(){
    Switch(content[7])
})
clicks[8].addEventListener('click', function(){
    Switch(content[8])
})
clicks[9].addEventListener('click', function(){
    Switch(content[9])
})
clicks[10].addEventListener('click', function(){
    Switch(content[10])
})

function Switch(content){
    if(content.classList.contains("hidden")){
        content.classList.remove("hidden");
        content.classList.add("show");
    } else {
        content.classList.remove("show");
        content.classList.add("hidden");
    }
}


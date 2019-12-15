// document.getElementById('hamburger')
//         .addEventListener('click', function (event) {
//             alert("clicked hamburger");
//         });

function collapseDiv(){
    var content = document.getElementById("content");
    var direction = document.getElementById("indexer");
    if (direction.innerText == "0") {
        direction.innerText = "1";
        content.classList.remove("main-content-big");
        content.classList.add("main-content-small");
        content.classList.toggle("move");
        
    }else{
        direction.innerText = "0";
        content.classList.remove("main-content-small");
        content.classList.add("main-content-big");        
        content.classList.toggle("move");
    }
}
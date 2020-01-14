document.getElementById("hamburg").addEventListener("click", hamburgerAction);

function hamburgerAction(){
    var contentContainer = document.getElementById("outerContent");
    var hamburger = document.getElementById("hamburg");
    contentContainer.classList.toggle("open");
    contentContainer.classList.toggle("closed");
    hamburger.classList.toggle("is-active");
}

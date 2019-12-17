document.getElementById("hamburg").addEventListener("click", function(){
    var hamburger = document.getElementById("hamburg");
    var content = document.getElementById("contentContainer");
    hamburger.classList.toggle("is-active");
    content.classList.toggle("open");
    content.classList.toggle("closed");
    if(content.classList.contains("open")){
    zIndex(500);
    }
    else{
        var up = document.getElementById("up");
        var down = document.getElementById("down");
        up.classList.toggle("visible");
        up.classList.toggle("invisible");
        down.classList.toggle("visible");
        down.classList.toggle("invisible");
    }
});

document.getElementById("up").addEventListener("click", function(){
    // var h = document.documentElement.clientHeight;
    // var container = document.getElementById('mainContent');
    // container.scrollBy(0, -h);
});

document.getElementById("down").addEventListener("click", function(){
    // var h = document.documentElement.clientHeight;
    // var container = document.getElementById('mainContent');
    // container.scrollBy(0, h);
});

async function zIndex(time){    
    var result = await sleep(time);
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
        var up = document.getElementById("up");
        var down = document.getElementById("down");
        up.classList.toggle("visible");
        up.classList.toggle("invisible");
        down.classList.toggle("visible");
        down.classList.toggle("invisible");
    }, time);
  });
}


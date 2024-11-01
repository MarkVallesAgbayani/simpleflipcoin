document.getElementById("button").addEventListener("click", function(){
    let flip = Math.floor(Math.random() *2);
    if (flip=== 0){
    document.getElementById("coin").setAttribute("src", "./images/head.png")
    document.getElementById("h1").textContent = "Head";
    }
    else{
    document.getElementById("coin").setAttribute("src", "./images/tails.png")
    document.getElementById("h1").textContent = "Tails";
    }
});

function spinAnimation(){
    classList.add("spin");
    setTimeout(function(){
    classList.remover("spin");
    }, 200)
}
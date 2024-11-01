function flipCoin(){
    let coinToss = Math.floor(Math.random() * 2 );

    if (coinToss === 0 ) {
        document.getElementById("coin").setAttribute("src", "./images/head.png");
        document.getElementById("h1").textContent = "Head";
    }
    else{
        document.getElementById("coin").setAttribute("src", "./images/tails.png");
        document.getElementById("h1").textContent = "Tails";
    }
}
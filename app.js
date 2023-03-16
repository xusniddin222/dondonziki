const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const point1 = document.querySelector("#point1");
const point2 = document.querySelector("#point2");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

btn.onclick = function(){
    const random1 = Math.floor(Math.random() * 6 +1);
    const random2 = Math.floor(Math.random() * 6 +1);
    img1.setAttribute("src", `img/dice${random1}.png`);
    img2.setAttribute("src", `img/dice${random2}.png`);
    point1.innerHTML = `point: ${random1}`;
    point2.innerHTML = `point: ${random2}`;
    
    if(random1 > random2){
        h1.innerHTML = "Player 1 won!"
    }
    else if(random1 < random2){
        h1.innerHTML = "Player 2 won!"
    }
    else {
        h1.innerHTML = "Draw!"
    }
}
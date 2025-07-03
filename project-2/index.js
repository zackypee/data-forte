const h1 = document.getElementsByTagName("h1")[0];
const img = document.getElementById("img");
const button = document.getElementById("roll-dice");

const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");


const colors = ["blue","green","yellow","red"];
const num = [1,2,3,4,5,6];



function randomColor(num){
    const random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

btn.addEventListener("click", function(){
    const newColor = randomColor()
    body.style.backgroundColor = newColor
});



function randomNumber(){
    const randomNum = Math.floor(Math.random() * num.length);
    return num[randomNum];
}


button.addEventListener("click", function(){
    const result = randomNumber()
    img.src = `/project-2/images/dice${result}.png`
    const newH1 = h1.textContent = result
})




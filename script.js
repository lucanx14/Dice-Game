const rand = () => Math.floor(Math.random() * 6)+1
const rand2 = () => Math.floor(Math.random() * 6)+1

const h1 = document.querySelector('h1')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const button = document.querySelector('button')

function diceRoll(num, num2){
    img1.setAttribute('src', 'images/dice'+num+'.png')
    img2.setAttribute('src', 'images/dice'+num2+'.png')
    greaterThan(num, num2)
}
function greaterThan(num, num2){
    if(num > num2)h1.innerHTML = "🚩Player 1 Wins"
    if(num < num2)h1.innerHTML = "Player 2 Wins🚩"
    if(num === num2)h1.textContent = "Draw"
}
button.addEventListener('click', ()=>{diceRoll(rand(), rand2())})


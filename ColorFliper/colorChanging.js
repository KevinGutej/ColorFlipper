const colors = ["green", "red", "#f15025", "rgba(133,122,200)"];

const button = document.getElementById('button');
const colorSpan = document.querySelector('color');

button.addEventListener('click', function(){
    //console.log(document.body);
    //Getting random number between 0 - 3
    const randomNum = 2; 
    document.body.style.backgroundColor = colors[randomNum];
    colorSpan.textContent = colors[randomNum];
})
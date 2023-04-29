const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
];

const button = document.getElementById('button');
const colorSpan = document.querySelector('.color');

button.addEventListener("click", function () {
    //Getting random number between 0-3
    const randomNum = getRandomNum(); 
    console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];
    colorSpan.textContent = colors[randomNum];
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length); //Here using the Math.floor When we randomize a number it will round to the nearest one so e.g 0.9 = 0 ; and thats how we get random number in this case from 0 - 3
}
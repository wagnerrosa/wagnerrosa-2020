// DOM Elements

const nightButton = document.getElementById('night');
const dayButton = document.getElementById('day');
const body = document.body;

var vtheme;

// Apply the cached theme on reload
console.log(localStorage.getItem('theme'));


function inicia(){
    if(localStorage.theme){
        document.getElementById("theme").className = localStorage.theme
    }
}


// Button Event Handlers

nightButton.onclick = () => {
    body.classList.replace('day', 'night');
    localStorage.setItem('theme', 'night');
    var vtheme = localStorage.getItem('theme')
};

dayButton.onclick = () => {
    body.classList.replace('night', 'day');
    localStorage.setItem('theme', 'day');
    var vtheme = localStorage.getItem('theme')
};

window.addEventListener('load',inicia);
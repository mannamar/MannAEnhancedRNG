// import data from '../data/names.json' assert { type: "json" };

let namesList = [];
let lastFiveNames = [];

let generateBtn = document.getElementById('generateBtn');
let clearBtn = document.getElementById('clearBtn');
let pickTxt = document.getElementById('pickTxt');
let pwrLvlTxt = document.getElementById('pwrLvlTxt');
let outputCont = document.getElementById('outputCont');
let nameInp = document.getElementById('nameInp');
let addNameBtn = document.getElementById('addNameBtn');

generateBtn.addEventListener('click', PickName);
clearBtn.addEventListener('click', ClearList);

addNameBtn.addEventListener('click', addName);

function addName() {
    if (nameInp.value) {
        namesList.push(nameInp.value);
        console.log(namesList);
    } else {
        outputText.textContent = 'Please enter a name in the input field';
    }
}

function PickName() {
    if (namesList.length === 0) {
        outputText.textContent = 'Please add at least one name to the list';
        return;
    }
    outputCont.classList.remove('d-none');
    let pick, randNum, pwrLvl;
    let count = 0;
    // This makes it so you never have the same person twice in our last five
    do {
        randNum = Math.floor(Math.random() * namesList.length);
        pick = namesList[randNum];
        console.log(pick);
        count++;
    } while (lastFiveNames.includes(pick) && count < 10);

    pickTxt.textContent = namesList[randNum];
    lastFiveNames.unshift(namesList[randNum]);
    
    if (pick.split(' ').length > 1) {
        pwrLvl = Math.floor(Math.random() * 1000) + 9000;
    } else {
        pwrLvl = Math.floor(Math.random() * 5000);
    }
    pwrLvlTxt.textContent = pwrLvl;

    if (lastFiveNames.length > 1) {
        lastFiveNames = lastFiveNames.slice(0, 1);
    }

    ShowLastFive();
}

function ShowLastFive() {
    let namesTxt = '';
    for (let i = 0; i < lastFiveNames.length; i++) {
        namesTxt += lastFiveNames[i] + '\n';
    }
    lastFiveTxt.textContent = namesTxt;
}

function ClearList() {
    outputCont.classList.add('d-none');
    lastFiveNames = [];
    pickTxt.textContent = '';
    lastFiveTxt.textContent = '';
}
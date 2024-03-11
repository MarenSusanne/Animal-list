updateView()
let animalList = ["Hund", "Katt", "Esel"]
let animalButton = document.getElementById("showAllAnimals")
let animalOutput = document.getElementById("outputAnimals")

function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div id="outputAnimals"></div>
    <button id="" onclick="randomAnimal()">Random Animal</button>
    <input id="inputAnimal" onchange="newAnimal(this.value)">
    <div id="allAnimals"></div>
    <button id="showAllAnimals" onclick="showAnimals()">Show all animals</button>
    `
}


function randomAnimal(){
    animalOutput.innerHTML = animalList[randomNumber()]
    if(animalOutput.innerHTML == "Hund"){
        animalOutput.style.color = 'green';
       }
       else{
        animalOutput.style.color = 'black';
       }
}

function randomNumber(){
    return Math.floor(Math.random() * animalList.length)
}

function newAnimal(input){
    animalList.push(input)
}

function showAnimals(){
    document.getElementById("allAnimals").innerHTML = ""
    
    if (animalButton.innerHTML == 'Show all animals'){
        animalButton.innerHTML = 'Hide all animals'

        for(let i = 0; i < animalList.length; i++){
        document.getElementById("allAnimals").innerHTML += /*HTML*/ `
        <div class="animalCard">${animalList[i]}</div>
        `
    }
    }
    else{
        animalButton.innerHTML = 'Show all animals'

    }
}
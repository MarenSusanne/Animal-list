let animalList = ["Hund", "Katt", "Esel"]
let math
let animalButton = document.getElementById("showAllAnimals")
let animalOutput = document.getElementById("outputAnimals")

function choose(){
   math = Math.floor(Math.random() * animalList.length)
   animalOutput.innerHTML = animalList[math]
   if(animalList[math] == 'Hund'){
    animalOutput.style.color = 'green'
   }
   else{
    animalOutput.style.color = 'black'

   }
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
const generer = document.getElementById('generer')
const reponse = document.getElementById('reponse')
const text = document.getElementById('text')
const send = document.getElementById('send')
const menu = document.getElementById('menu')
const menuContent = document.getElementById('menu-content')
const M = document.getElementById('M')
const X = document.getElementById('X')
const nbCalculSelect = document.getElementById('nombre-calcul-select')
const maxValueSelect = document.getElementById('valeur-max-select')
const timeSelect = document.getElementById('time')

var repetition = 3
var maxValue = 10
var calculTime = 1000

var resulta = 0
var curentRepetition = repetition
var calculeCreat = false
var showMenu = false
var R = 0


for(i = 3; i < 21; i++){
    option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    nbCalculSelect.appendChild(option)
}

for(i = 5; i < 101; i++){
    option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    maxValueSelect.appendChild(option)
}

menu.addEventListener('click', ()=>{
    R += 360
    X.style.transform = 'rotateZ(' + R + 'deg)'
    M.style.transform = 'rotateZ(' + R + 'deg)'
    if(showMenu == false){
        menuContent.classList.add('active')
        showMenu = true
        M.classList.remove('activeIcon')
        X.classList.add('activeIcon')
    }else{
        menuContent.classList.remove('active')
        showMenu = false
        M.classList.add('activeIcon')
        X.classList.remove('activeIcon')
    }
})

generer.addEventListener('click', ()=>{
    resulta = 0
    curentRepetition = 0
    maxValue = maxValueSelect.value
    repetition = nbCalculSelect.value
    calculTime = timeSelect.value * 1000
    generer.disabled = true
    generer.disabled = false
})

send.addEventListener('click', ()=>{
    check()
})

document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13){
        check()
    }
})

function check(){
    if(calculeCreat == true){
        curentReponse = reponse.value
        if(curentReponse == resulta){
            console.log('good')
            calculeCreat = false
            reponse.value = " "
            text.innerHTML = "Réponse correcte"
        }else{
            console.log('false')
            reponse.value = " "
        }
    }
}

function creatCalcul(){
    if(curentRepetition < repetition){
        curentRepetition++
        curentNumber = Math.floor(Math.random() * maxValue)
        x = Math.floor(Math.random() * 2)
        if(x == 0){
            resulta -= curentNumber
            text.innerHTML = "- " + curentNumber
        }else{
            resulta += curentNumber
            text.innerHTML = curentNumber
        }
        if(curentRepetition == repetition){
            console.log(resulta)
            calculeCreat = true
        }
    }
}
setInterval(creatCalcul, calculTime)
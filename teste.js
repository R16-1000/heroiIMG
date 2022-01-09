const ant = document.getElementById('ant')
const pro = document.getElementById('pro')
const tes = document.getElementById('tes')

function anterior1(){
    tes.src = './img/batman.png' 
    
}

function anterior2(){
    tes.src = './img/man antenna.png'
}

function proximo1(){
    tes.src = './img/marvel.png'
}

function proximo2(){
    tes.src = './img/spider man.png'
}

 ant.addEventListener('click', anterior1)
 ant.addEventListener('dblclick', anterior2)
 pro.addEventListener('click', proximo1) 
 pro.addEventListener('dblclick', proximo2)
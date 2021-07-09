var video1 = document.querySelector('#video1')
var video2 = document.querySelector('#video2')
var video3 = document.querySelector('#video3')
var video4 = document.querySelector('#video4')
var boton_rep1 = document.querySelector ('#repro1')
var boton_rep2 = document.querySelector ('#repro2')
var boton_rep3= document.querySelector ('#repro3')
var boton_rep4= document.querySelector ('#repro4')

function reproducir1() {
    if (video1.paused){
        video1.play()
        boton_rep1.innerHTML="<img src=icons/pause.png>";
    }else{
        video1.pause()
        boton_rep1.innerHTML="<img src=icons/play.png>";
    }
}
function detener1(){
        video1.pause()
        video1.currentTime=0
        boton_rep1.innerHTML="<img src=icons/play.png>";
}
function saltar1(fotogramas) {
    video1.currentTime += fotogramas
}


function reproducir2() {
    if (video2.paused){
        video2.play()
        boton_rep2.innerHTML="<img src=icons/pause.png>";
    }else{
        video2.pause()
        boton_rep2.innerHTML="<img src=icons/play.png>";
    }
}
function detener2(){
        video2.pause()
        video2.currentTime=0
        boton_rep2.innerHTML="<img src=icons/play.png>";
}
function saltar2(fotogramas) {
    video2.currentTime += fotogramas
}


function reproducir3() {
    if (video3.paused){
        video3.play()
        boton_rep3.innerHTML="<img src=icons/pause.png>";
    }else{
        video3.pause()
        boton_rep3.innerHTML="<img src=icons/play.png>";
    }
}
function detener3(){
        video3.pause()
        video3.currentTime=0
        boton_rep3.innerHTML="<img src=icons/play.png>";
}
function saltar3(fotogramas) {
    video3.currentTime += fotogramas
}

function reproducir4() {
    if (video4.paused){
        video4.play()
        boton_rep4.innerHTML="<img src=icons/pause.png>";
    }else{
        video4.pause()
        boton_rep4.innerHTML="<img src=icons/play.png>";
    }
}
function detener4(){
        video4.pause()
        video4.currentTime=0
        boton_rep4.innerHTML="<img src=icons/play.png>";
}
function saltar4(fotogramas) {
    video4.currentTime += fotogramas
}
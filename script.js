let backward = document.querySelector('.btb')
let play = document.querySelector('.btp')
let forward = document.querySelector('.btf')
let audios = document.querySelector('#audios')
let tittle = document.querySelector('#tittle')
const captt = 6

backward.addEventListener('click', voltar)
play.addEventListener('click', playPause)
forward.addEventListener('click', avancar)

let validador = 0
let capa = 1

function tocar() {
    validador = 1
    audios.play()
    play.classList.remove('bi-play-circle')
    play.classList.add('bi-pause-circle')
}

function pausar() {
    validador = 0
    audios.pause()
    play.classList.remove('bi-pause-circle')
    play.classList.add('bi-play-circle')
}

function playPause() {
    if (validador == 0) {
        tocar()
    } else {
        pausar()
    }
}

function avancar() {
    capa += 1
    if (capa > captt) {
        capa = 1
        audios.src = `arquivos/galatas-1.mp3`
        tittle.innerHTML = `Capítulo - ${capa}`
        tocar()
    } else {
        audios.src = `arquivos/galatas-${capa}.mp3`
        tittle.innerHTML = `Capítulo - ${capa}`
        tocar()
    }

}

function voltar() {
    capa -= 1
    if (capa < 1) {
        capa = captt
        audios.src = `arquivos/galatas-${captt}.mp3`
        tittle.innerHTML = `Capítulo - ${capa}`
        tocar()
    } else {
        audios.src = `arquivos/galatas-${capa}.mp3`
        tittle.innerHTML = `Capítulo - ${capa}`
        tocar()
    }
}
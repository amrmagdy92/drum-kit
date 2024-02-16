window.addEventListener('keypress', (e) => {
    let audio
    switch (e.key) {
        case "w":
            audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break;

        case "a":
            audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break;

        case "s":
        audio = new Audio('./sounds/tom-3.mp3')
        audio.play()
        break;

        case "d":
        audio = new Audio('./sounds/tom-4.mp3')
        audio.play()
        break;

        case "j":
        audio = new Audio('./sounds/snare.mp3')
        audio.play()
        break;

        case "k":
        audio = new Audio('./sounds/crash.mp3')
        audio.play()
        break;

        case "l":
        audio = new Audio('./sounds/kick-bass.mp3')
        audio.play()
        break;

        default:
            break;
    }
})

document.getElementById('w-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/tom-1.mp3')
    audio.play()
})

document.getElementById('a-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/tom-2.mp3')
    audio.play()
})

document.getElementById('s-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/tom-3.mp3')
    audio.play()
})

document.getElementById('d-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/tom-4.mp3')
    audio.play()
})

document.getElementById('j-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/snare.mp3')
    audio.play()
})

document.getElementById('k-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/crash.mp3')
    audio.play()
})

document.getElementById('l-btn').addEventListener('click', (e) => {
    let audio = new Audio('./sounds/kick-bass.mp3')
    audio.play()
})
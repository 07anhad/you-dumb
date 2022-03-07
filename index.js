const container = document.querySelector('.container');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');

noBtn.addEventListener('click', () => {
    noBtn.style.position = 'absolute';

    const randomLeft = Math.floor(Math.random() * container.clientWidth);
    const randomTop = Math.floor(Math.random() * container.clientHeight);

    
    if (randomLeft >= container.clientWidth / 2) {
        noBtn.style.left = `${randomLeft - noBtn.clientWidth}px`;
        
    }

    if (randomTop >= container.clientHeight / 2) {
        noBtn.style.top = `${randomTop - noBtn.clientHeight}px`;

    }


});

yesBtn.addEventListener('click', () => {
    container.innerHTML = `<h2>I knew it.</h2>`
})
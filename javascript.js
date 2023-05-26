const container = document.querySelector('.gridContainer')

for (let i = 1; i <= 256; i++) {
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('gridBox')
    squareDiv.setAttribute('style', 'aspect-ratio: 1/1;')
    container.appendChild(squareDiv)

    squareDiv.addEventListener('mouseenter', function (e) {
        e.target.classList.add('hovered');
    });

    squareDiv.addEventListener('mouseleave', function(e) {
        e.target.classList.remove('hovered');
    });
}


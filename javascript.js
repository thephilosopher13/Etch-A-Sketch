const container = document.querySelector('.gridContainer');
const squaresPerSideHolder = document.getElementById('squaresPerSide');
const generateButton = document.getElementById('gridGenerator');
const clearCanvas = document.getElementById('clear');

generateButton.addEventListener('click', function() {
    const squaresPerSide = squaresPerSideHolder.value;
    const totalSquares = Math.pow(squaresPerSide, 2)
    const allGridBoxes = document.querySelectorAll('.gridBox')
    const isThereGridBox = document.querySelector('.gridBox')

    // first function is to delete already existing boxes so crashes don't happen if you click 'generate' again and again

    if (isThereGridBox) {
        allGridBoxes.forEach(function(squareDiv) {
            squareDiv.remove();
        });
    };

    if (squaresPerSide < 1 || squaresPerSide > 64) {
        //code to make sure you can't put invalid inputs
        alert ("Invalid Input! Pick a number from 1 to 64!");
    } else {

        // first function is to delete already existing boxes so crashes don't happen if you click 'generate' again and again

        if (isThereGridBox) {
            allGridBoxes.forEach(function(squareDiv) {
                squareDiv.remove();
            });
        };

        for (let i = 1; i <= totalSquares; i++) {

            container.setAttribute('style', `grid-template-columns: repeat(${squaresPerSide}, 1fr); grid-template-rows: repeat(${squaresPerSide}, 1fr);`);

            const squareDiv = document.createElement('div')
            squareDiv.classList.add('gridBox')
            squareDiv.setAttribute('style', 'aspect-ratio: 1/1;')
            container.appendChild(squareDiv)
            allGridBoxes.forEach(function(squareDiv) {
                squareDiv.classList.remove('hovered');
            });
    
        
            squareDiv.addEventListener('mouseenter', function (e) {
                e.target.classList.add('hovered');
            });
        };
    };

    clearCanvas.addEventListener('click', function() {
        const allGridBoxes = document.querySelectorAll('.gridBox')
        allGridBoxes.forEach(function(squareDiv) {
            squareDiv.classList.remove('hovered');
        });
    });
    

});

clearCanvas.addEventListener('click', function() {
    const allGridBoxes = document.querySelectorAll('.gridBox')
    allGridBoxes.forEach(function(squareDiv) {
        squareDiv.classList.remove('hovered');
    });
});


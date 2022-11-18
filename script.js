const gridContainer = document.querySelector('.grid-container');

const drawGrid = (sideLength) => {
    size=sideLength**2
    for(i=0; i<size; i++){
        const block = document.createElement('div')
        gridContainer.appendChild(block);
        // gridContainer.innerHTML = `<div class=block${size}>A</div>`
    }
}
drawGrid(16);
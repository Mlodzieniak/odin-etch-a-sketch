const gridContainer = document.querySelector('.grid-container');
const erase = document.querySelector('#erase');
const gridSize = document.querySelector('#grid-size');



setGridSize();
function drawGrid (sideLength){
    size=sideLength**2;
    for(i=0; i<size; i++){
        const blockElement = document.createElement('div');
        blockElement.classList.add('block-element');
        gridContainer.appendChild(blockElement);
    }
}
function addEventListenerToEveryElement(block){
    block.forEach(element =>{
        element.addEventListener('click', ()=>{
            element.classList.toggle('block-hover');
        })
    });
}
function setGridSize(){
    gridContainer.innerHTML = '';
    let sizeSetupPrompt = prompt('How many squares per side do you want to create?(max 100)')
    drawGrid(sizeSetupPrompt);
    const block = document.querySelectorAll('.block-element');
    addEventListenerToEveryElement(block);
}
function eraseGrid(){
    block.forEach(element => {
        element.classList.remove('block-hover');
    })
};

erase.addEventListener('click', eraseGrid);
gridSize.addEventListener('click', setGridSize);

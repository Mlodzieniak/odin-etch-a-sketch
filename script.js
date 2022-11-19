const gridContainer = document.querySelector('.grid-container');
const erase = document.querySelector('#erase');

const drawGrid = (sideLength) => {
    size=sideLength**2
    for(i=0; i<size; i++){
        const blockElement = document.createElement('div')
        blockElement.classList.add('block-element')
        gridContainer.appendChild(blockElement);
    }
}
drawGrid(16);
const block = document.querySelectorAll('.block-element');
block.forEach(element =>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('block-hover');
    })
});

const eraseGrid = () =>{
    block.forEach(element => {
        element.classList.remove('block-hover');
    })
};
erase.addEventListener('click', eraseGrid);
const gridContainer = document.querySelector('.grid-container');
const clear = document.querySelector('#clear');
const gridSizeSlider = document.getElementById('grid-size-slider')
const gridSizeValueOutput = document.getElementById('grid-size-value-output')
const meshToggle = document.querySelector('#mesh-toggle');
const erase = document.querySelector('#erase');

gridSizeValueOutput.innerHTML = `${gridSizeSlider.value}x${gridSizeSlider.value}`;
gridSizeSlider.oninput = function () {
    gridSizeValueOutput.innerHTML = `${gridSizeSlider.value}x${gridSizeSlider.value}`;
    setGridSize();
    meshFeature();
}
setGridSize();
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
function setGridSize() {
    gridContainer.innerHTML = '';
    let correctGridSize = gridSizeSlider.value;
    drawGrid(correctGridSize);
    const block = document.querySelectorAll('.block-element');
    addEventListenerToEveryElement(block, correctGridSize);
}
function drawGrid(sideLength) {
    size = sideLength ** 2;
    for (i = 0; i < size; i++) {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block-element');
        gridContainer.appendChild(blockElement);
    }
}

function addEventListenerToEveryElement(block, sizeSetupPrompt) {
    block.forEach(element => {
        element.addEventListener('mouseover', (e) => drawOrErase(element, eraseToggled, e));
        element.addEventListener('dragstart', ()=>{return})
        element.addEventListener('drag', ()=>{return})
    });
    block.forEach(element => {
        element.style.cssText = `width: ${100 / sizeSetupPrompt}%; height: ${100 / sizeSetupPrompt}%`
    })
}
function drawOrErase(element2, eraseToggle, e) {
    if (eraseToggle) {
        element2.classList.remove('block-hover');
        console.log('remove')
        return
    }
    if (e.type === 'mouseover' && mouseDown) {
        e.target.classList.add('block-hover');
    }
}

function clearGrid() {
    const block = document.querySelectorAll('.block-element');
    block.forEach(element => {
        element.classList.remove('block-hover');
    })
};
function meshFeature() {
    meshToggle.classList.toggle('button-toggle');
    const block = document.querySelectorAll('.block-element');
    block.forEach(element => {
        element.classList.toggle('block-mesh');
    })
}
let eraseToggled = false;
erase.addEventListener('click', () => {
    erase.classList.toggle('button-toggle');
    eraseToggled ? eraseToggled = false : eraseToggled = true;
    console.log(eraseToggled)
})
clear.addEventListener('click', clearGrid);
meshToggle.addEventListener('click', meshFeature);

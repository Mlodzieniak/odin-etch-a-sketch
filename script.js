const gridContainer = document.querySelector('.grid-container');
const clear = document.querySelector('#clear');
const gridSizeSlider = document.getElementById('grid-size-slider')
const gridSizeValueOutput = document.getElementById('grid-size-value-output')
const meshToggle = document.querySelector('#mesh-toggle');
const erase = document.querySelector('#erase');

gridSizeValueOutput.innerHTML = gridSizeSlider.value;
gridSizeSlider.oninput = function () {
    gridSizeValueOutput.innerHTML = this.value;
    setGridSize();
    meshFeature();
}
setGridSize();
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
        element.addEventListener('mousedown', () => {
            // element.classList.add('block-hover');
            block.forEach(element2 => {
                element2.addEventListener('click', ()=>drawOrErase(element2, eraseToggled));
            })
        });
    });
    block.forEach(element => {
        element.style.cssText = `width: ${100 / sizeSetupPrompt}%; height: ${100 / sizeSetupPrompt}%`
    })
}
function drawOrErase(element2, eraseToggle) {
    if (eraseToggle) {
        element2.classList.remove('block-hover');
        console.log('remove')
        return
    }
    element2.classList.add('block-hover');
}
function gridSizeCheck() {
    let sizeSetupPrompt = 0;
    while (true) {
        sizeSetupPrompt = prompt('Type grid size. Between 1 and 100.')
        if (sizeSetupPrompt > 100 || sizeSetupPrompt < 1) {
            alert('Type between 1 and 100.');
            continue;
        } break;
    }
    return sizeSetupPrompt
}

function clearGrid() {
    const block = document.querySelectorAll('.block-element');
    block.forEach(element => {
        element.classList.remove('block-hover');
    })
};
function meshFeature() {
    const block = document.querySelectorAll('.block-element');
    block.forEach(element => {
        element.classList.toggle('block-mesh');
    })
}
let eraseToggled = false;
erase.addEventListener('click', () => {
    eraseToggled ? eraseToggled=false:eraseToggled=true;
    console.log(eraseToggled)
})
clear.addEventListener('click', clearGrid);
meshToggle.addEventListener('click', meshFeature);

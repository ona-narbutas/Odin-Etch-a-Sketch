//use query selector to target relevant elements
const container = document.querySelector('.container');
const button = document.querySelector('button');

//declare function to generate squares with necessary class and event listiner
function createSquares(num = 16) {
    console.log(`num: ${num}.`);

    //update the .container class to container num columns and num rows
    let repeater = `repeat(${num}, 1fr)`;
    container.style.gridTemplateColumns = repeater;
    container.style.gridTemplateRows = repeater;

    //create new boxes
    for (i = 0; i < num ** 2; i++) {
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.addEventListener('mouseover', () => {
            newBox.style.backgroundColor = 'gray';
        });
        container.appendChild(newBox);
    }
    return;
}


//run createSquares with 16 as its argument to create a 16x16 grid
createSquares();

//add event listener to button that calles createSquares with user
//input as its argument
button.addEventListener('click', () => {
    let input = document.getElementById('user-response').value;
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => container.removeChild(box));
    createSquares(input);
    console.log(input)
});
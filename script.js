//use query selector to target the conttainer element
const container = document.querySelector('.container');

//create a function called createSquares
    //input: num - how many columns/rows, the square root of total number of squares
function createSquares(num) {

    //create a for loop to run num times
    for (i = 0; i < num ** 2; i++) {
        //on each iteration, create a box
        let newBox = document.createElement('div');
        //assign it the "box" class
        newBox.classList.add('box');
        //add an event listener to change color when moused over
        newBox.addEventListener('mouseover', () => {
            newBox.style.backgroundColor = 'gray';
        });
        //append it to container
        container.appendChild(newBox);
    }
}

//run createSquares with 16 as its argument to create a 16x16 grid
createSquares(16);
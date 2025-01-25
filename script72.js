let boxes = document.querySelector(".container").children 
//selecting all the boxes in the container

function getRandomColor() {

    let val_1 = Math.ceil(0+Math.random()*255); //generating random number between 0 and 255
    let val_2 = Math.ceil(0+Math.random()*255);
    let val_3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val_1},${val_2},${val_3})`; //returning the random color
}

Array.from(boxes).forEach(e => {//iterating through all the boxes
    e.style.backgroundColor = getRandomColor(); //changing the background color of the box
    e.style.color = getRandomColor(); //changing the text color of the box
});

let a = [1, 1, 2];
let b = [1, 1, 3];

function addTwoArrays() {
    a.forEach((item, index) => {
        console.log(item + b[index]);
    });
}addTwoArrays()
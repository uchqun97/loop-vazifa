function removeEgg(foods) {
    const result = [];
    let eggRemoved = 0; 

    for (let i = foods.length - 1; i >= 0; i--) {
        const food = foods[i];
        if (food === 'tuxum' && eggRemoved < 2) {
            eggRemoved++; 
        } else {
            result.unshift(food); 
        }
    }

    return result;
}

const foods = ['tuxum', 'olma', 'tuxum', 'tuxum', 'ham'];
console.log(removeEgg(foods)); 

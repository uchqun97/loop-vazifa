function removeEgg(foods) {
    const result = [];
    let eggRemoved = 0;
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        if (food === 'tuxum' && eggRemoved < 2) {
            eggRemoved++;
        } else {
            result.push(food);
        }
    }
    return result;
}

const foods = ['tuxum', 'olma', 'tuxum', 'tuxum', 'ham'];
console.log(removeEgg(foods)); 
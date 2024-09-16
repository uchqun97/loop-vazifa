function removeEgg(foods) {
    const result = [];
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        if (food !== 'tuxum') {
            result.push(food);
        }
    }
    return result;
}

const foods = ['tuxum', 'olma', 'tuxum', 'tuxum', 'ham'];
console.log(removeEgg(foods)); 

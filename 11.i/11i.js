function addNum(massiv, num) {
    return massiv.map(element => element + num);
  }
  
  console.log(addNum([1, 2, 3], 2));
  console.log(addNum([1, 2, 3], 3));
  console.log(addNum([-2, -1, 0, 991, 2], 2)); 
  
function arraySwap(arr) {
    const length = arr.length;
    [arr[0], arr[length - 1]] = [arr[length - 1], arr[0]];
    
    return arr;
}

console.log(arraySwap([1, 20, 22, 24, 51])); 
console.log(arraySwap(['salom', 'zor', 'yaxshi'])); 

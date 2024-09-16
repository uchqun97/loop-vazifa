function minMax(nums){
    let min = nums[0];
    let max = nums[0];
    for(let i=0;i<nums.length;i++){
        if (nums[i] < min) {
            min = nums[i]; 
        }
        if (nums[i] > max) {
            max = nums[i]; 
        }
    }

    return { min: min, max: max }; 
 }
 console.log(minMax([])); 
//  console.log(minMax([-2, 3, -5, 7, 10])); 
 
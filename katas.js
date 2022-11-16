function solution(nums){
  if(nums == null || nums == []){
    return [];
  } 
  
  let tmp = [];
  let n = 0;
  
  while(n < nums.length){
    for(let i = 0; i < nums.length; i++){
      if(nums[n] < nums[i]){
        tmp = nums[n];
        nums[n] = nums[i];
        nums[i] = tmp;
      }
    }
    n++;
  }
  
  return nums;
}
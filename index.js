(() => {
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let val = 3;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == val) {
      nums[i] = nums[j];
      i++;
    }
  }

  console.log({ nums });
})();

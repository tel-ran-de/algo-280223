function isNonDecreasing(nums) {
    // [] -> false
    if (nums.length === 0) {
        return false;
    }
    // неубывающая: a_(i-1) <= a_(i)
    for (let i = 1; i < nums.length; i++) {
        let leftElement = nums[i - 1]; // 3
        let rightElement = nums[i]; // 2
        // 3 <= 2
        if (leftElement <= rightElement) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

// var nums = [1,2,3]
// var nums = []
let nums = [3, 2, 1]
console.log("The result is " + isNonDecreasing(nums))
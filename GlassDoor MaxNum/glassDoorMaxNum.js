function findMaxNum (array) {
    let maxNum = array[0];//declare a variable maxNum and store the value of array at index 0; we're to 
    //temporarily use this value as the max number

    for (let i = 0; i < array.length; i++) {//use a for loop to iterate through the array
        if (maxNum < array[i]) {//declare a conditional to check if the current max number is less
            //than the current element in the iteration. If truthy run the code below: 
            maxNum = array[i]// reassign the value of maxNum; this is now the new max number until
            //another larger number is found. 
        }
    }
    return maxNum; //once the for loop has concluded; the variable maxNum should hold the maximum 
                   //number in the array
}
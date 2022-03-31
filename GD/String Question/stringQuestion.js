function stringQuestion (string1, string2) {
    if (string1.length !== string2.length) {//if the strings have different lengths, that means there are 
        //not enought letters in string1 to compose the word in string2. Therefore, return false for this
        //edge case.
        return false
    } 
  
    let letterPoolArray = string1.split('');//the first string is split into an array so we can apply the 
    //array splice method later in our code. 
    
    for (let i = 0; i < string2.length; i++) {//loop through the entire second input string

        let char = string2[i];//declare a variable char that stores the current element in the second
        //string iteration
        
        if (letterPoolArray.includes(char)) {//if the array (letterPoolArray)composed of the first string 
            //letters includes the current character from the second string, run the code below:
            
            let letterIndex = letterPoolArray.indexOf(char);//declare a variable letterIndex to store the
            //index of the current character at the letterPoolArray
            
            letterPoolArray.splice(letterIndex, 1)//delete that character from the letterPoolArray as it's
            //no longer needed. If we're looking for the same letter to compose string2, string1 should
            //have another duplicate letter. Otherwise this function would be false.
        } 
        
    }

    if (letterPoolArray.length < 1) { //this block of code will run once the for loop is done. At this point
        //all the letters in the string1 should be used. This means we have accomplished our goal, therefore
        //return true
      return true
    } else {//if there is still letters left in string1, we have not accomplished our goal. Therefore, return
            //false
      return false
    }
}
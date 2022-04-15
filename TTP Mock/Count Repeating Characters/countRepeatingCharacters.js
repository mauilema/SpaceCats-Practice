function countRepeatingCharacters (string) {
    const lowerCaseString = string.toLowerCase(); //since the output array requires that all characters be lower case, change all characters in the input string to 
    //lower case and store the new string in a const variable called "lowerCaseString"

    const countCharsObj = {}; //declare a const variable that stores an empty object. This will serve as a hash map data structure. It will eventually contain several
    //key value pairs. The keys would be each unique character in the input string. The values would be a count of repeating characters in the input string.

    const outputArray = []; //declare a variable that stores an empty array. This will be the array that stores string elements. Each string will be composed of 
    //the each unique character in the input string. It will be attached to each count (amount of times a character repeats) value.
    
    for (let i = 0 ; i < lowerCaseString.length; i++) { //use a for loop to iterate through the lower case string. 

        let char = lowerCaseString[i]; //declare a variable that stores the value of each character at each index in the string.

        if (!countCharsObj[char]) { //use a conditional if statement to check if a key exists in the object countCharsObj. If not, then add the current character as key and the number
            //1 as it's value. 

            if (char === " ") continue; //if the current character is a space, we want to skip it as we don't need to account for spaces in our final output array.

            countCharsObj[char] = 1;
        } else {
            countCharsObj[char]++; //if a key already exists in the object countCharsObj, just add 1 to the value; which is the count of repeating characters.
        }
        //at the end of this loop, we should have an object countCharsObj that holds all unique characters in the string as keys and the amount of times they repeat as values.
    }
    //Next we want to combine each key value pair in the countCharsObj object into a single string...

    for (const [key, value] of Object.entries(countCharsObj)) { //use a for of loop to iterate through the object. We also use deconstruction to declare 2 const variables. One
        //variable is the key and the other one is the value. The object entries method helps us access both the key and value pairs of an object at the same time. 

        let keyValuePair = `${key}${value}` //declare a variable that stores each key value pair as one single string. We use a string literal to accomplish this goal. 

        outputArray.push(keyValuePair) //push each key value pair string into the output array. 
    }
    return outputArray //At this point, the array should have all the key value pair strings found in the countCharsObj. Therefore, all we need to do is return it. 
}

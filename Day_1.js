// Q: Give an array of integers, replace all the occurrences of elementToReplace with subtructionElement
     // array = [1, 2, 3, 4, 2, 5] , elementToReplace = 2, subtructionElement = 10

/* ***************Answer***************** */

const replaceElements = (array, elementToReplace, subtructionElement) =>{
      array.forEach((element, index) =>{
        if(element === elementToReplace){
            array[index] = subtructionElement;
        }
      })   
      return array; 
}



// variable declaration
const array = [1, 2, 3, 4, 2, 5];
const elementToReplace = 2;
const subtructionElement = 10;

//call the function
const result = replaceElements(array, elementToReplace, subtructionElement);
console.log(result);
// 8. Schreiben Sie ein JavaScript-Programm, um die nicht eindeutigen Werte 
// in einem Array herauszufiltern. (Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).


function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  const exampleArray = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(exampleArray)); 



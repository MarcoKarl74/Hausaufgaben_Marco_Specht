// 5. Schreiben Sie ein JavaScript-Programm, um jedes n-te Element in einem gegebenen Array zu erhalten.


function getNthElements(array, n) {
    // Überprüfen Sie die Größe des Arrays
    if (array.length === 0) {
      return [];
    }
  
    // Initialisieren Sie das neue Array
    let result = [];
  
    // Durchlaufen Sie das Array
    for (let i = n - 1; i < array.length; i += n) {
      result.push(array[i]);
    }
  
    return result;
  }
  
  const array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
  console.log(getNthElements(array, 5));
  
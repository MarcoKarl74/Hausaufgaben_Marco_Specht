//3. Schreiben Sie ein JavaScript-Programm, um die Differenz zwischen einer gegebenen Zahl 
//und 13 zu erhalten, wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.


function difference(number) {
    // Berechnen Sie die Differenz zwischen der gegebenen Zahl und 13
    let diff = number - 13;
  
    // Überprüfen Sie, ob die gegebene Zahl größer als 13 ist
    if (number > 13) {
      // Wenn ja, geben Sie die doppelte absolute Differenz zurück
      
      return 2 * Math.abs(diff);
    }
  
    // Andernfalls geben Sie die absolute Differenz zurück
  
    return Math.abs(diff);
    
  }
  
  console.log(difference(3))
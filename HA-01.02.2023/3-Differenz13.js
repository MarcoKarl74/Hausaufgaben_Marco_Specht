//3. Schreiben Sie ein JavaScript-Programm, um die Differenz zwischen einer gegebenen Zahl 
//und 13 zu erhalten, wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.


function difference(number) {
    // Berechnung der Differenz zwischen der gegebenen Zahl und 13
    let diff = number - 13;
  
    // Überprüfung ob die gegebene Zahl größer als 13 ist
    if (number > 13) {
      // Wenn ja, Verdopplung der absoluten Differenz
      
      return 2 * Math.abs(diff);
    }
  
    // Wenn nein, Rückgabe der absoluten Differenz 
  
    return Math.abs(diff);
    
  }
  
  console.log(difference(3))
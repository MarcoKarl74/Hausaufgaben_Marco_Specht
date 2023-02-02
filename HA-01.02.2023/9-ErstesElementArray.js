// 9. Schreiben Sie eine JavaScript-Funktion, um das erste 
// Element eines Arrays abzurufen. Das Übergeben eines Parameters 'n' gibt 
// die ersten 'n' Elemente des Arrays zurück


function first(array, n = 1) {
    // Wenn Array leer gib ein leeres Array zurück
    if (array.length === 0) return [];

    // Wenn n kleiner ist als null, setze n auf null
    if (n < 0) n = 0;

    // Slice-Methode um die ersten n-Elemente zurückzugeben
    return array.slice(0, n);
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  



function shuffleArray(array) {

    // Eine Schleife die durch jedes Element im Array geht
    for (let x = array.length - 1; x > 0; x--) {
      
        // Schritt 2: Berechnen Sie einen zufälligen Index innerhalb des aktuellen Bereichs (0 bis i)
      const y = Math.floor(Math.random() * (x + 1));
      
      // Schritt 3: Tauschen Sie das Element an Stelle i mit dem zufällig ausgewählten Element an Stelle j
      [array[x], array[y]] = [array[y], array[x]];
    }
    
    // Schritt 4: Gib das gemischte Array zurück
    return array;
  }
  

  const array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
  console.log(shuffleArray(array));
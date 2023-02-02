


function shuffleArray(array) {

    // Eine Schleife die durch jedes Element im Array geht
    for (let x = array.length - 1; x > 0; x--) {
      
        // Berechnen Sie einen zufälligen Index innerhalb des aktuellen Bereichs (0 bis x)
      const y = Math.floor(Math.random() * (x + 1));
      
      // Tauschen Sie das Element an Stelle x mit dem zufällig ausgewählten Element an Stelle y
      [array[x], array[y]] = [array[y], array[x]];
    }
    
    // Gib das gemischte Array zurück
    return array;
  }
  

  const array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
  console.log(shuffleArray(array));
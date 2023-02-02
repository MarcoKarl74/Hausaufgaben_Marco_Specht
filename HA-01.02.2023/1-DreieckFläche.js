// Schreiben Sie ein JavaScript-Programm, um den Flächeninhalt eines Dreiecks 
// zu ermitteln, dessen drei Seitenlängen a, b, c sind


function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
    return area;
  }

triangleArea(8, 12,5);

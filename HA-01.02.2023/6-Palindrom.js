// 6. Schreiben Sie ein JavaScript-Programm, um herauszufinden, 
// ob ein Wort ein Palindrom ist, oder nicht. (z. B. Madam, Anna, Otto)


function isPalindrome(word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
  }
  
  console.log(isPalindrome("Hallo")); // true
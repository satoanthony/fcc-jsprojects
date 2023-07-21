function convertToRoman(num) {
    const lookUp = {
                    M: 1000,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
    }
    let loop = '';
   for (const key in lookUp) {
     const numb = lookUp[key];
     while (numb <= num) {
      num -= numb;
      loop += key;
  
     }
    }
    return loop
  }
  convertToRoman(36);
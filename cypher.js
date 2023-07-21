const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

function rot13(str) {
  let accu = "";
    //criar loop through
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isLetter = alphabet.includes(str[i]);
    //if statement para adicionar ao acumulador
        if (isLetter === false) {
            accu += char;
        } else {
    //else rotacionar 13 chars - nao pode ser maior que o array
            const charIndex = alphabet.findIndex((c) => c === char );
            accu += alphabet[charIndex + 13] || alphabet[charIndex - 13];
        }
    }
    //retornar o resultado
  return accu;
}

rot13("SERR PBQR PNZC");
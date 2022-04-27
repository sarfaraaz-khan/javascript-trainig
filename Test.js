// let numb = [1, 2, 3, 4, 5, 7, 1];

// let uniqueChars = [...new Set(numb)];

// console.log(uniqueChars);

// let chars = [1, 2, 3, 4, 1, 2];
// console.log(chars);

// let newChar = [];

// chars.forEach((clean) => {
//   if (!newChar.includes(clean)) {
//     newChar.push(clean);
//   }
// });

// console.log(newChar);

// let duplicatesNumber = [1, 2, 3, 4, 5, 1, 2, 3, 6];

// let withoutDuplicates = [...new Set(duplicatesNumber)];

// console.log(withoutDuplicates);

let duplicatesNumber = [1, 2, 3, 4, 5, 1, 2, 3, 6];

let noduplicates = [];

duplicatesNumber.forEach((clean) => {
  if (!noduplicates.includes(clean)) {
    noduplicates.push(clean);
  }
});

console.log(noduplicates);

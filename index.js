
// // // // let S = "AbaDd";
// // // // function countCharacters(S) {
// // // //     let B = [0, 0]; 
// // // //     for (let char of S) {
// // // //         if (char === 'A') {
// // // //             B[0]++;
// // // //         } else if (char === 'D') {
// // // //             B[1]++; 
// // // //         }
// // // //     }
    
// // // //     return B;
// // // // }
// // // // console.log(countCharacters(S)); 


// // // //..............................QUESTION 2................................

// // // // let S = "prepbytes";
// // // // function countHead(S) {
// // // //     let countMap = {}; 

// // // //     for (let char of S) {
// // // //         countMap[char] = (countMap[char] || 0) + 1;
// // // //     }
// // // //     let result = '';
// // // //     Object.keys(countMap).sort().forEach(char => {
// // // //         if (countMap[char] > 1) {
// // // //             result += char + countMap[char]; 
// // // //         }
// // // //     });
    
// // // //     return result;
// // // // }

// // // // console.log(countHead(S)); 
// // // //............................................QUESTION 3.......................................................
// // // // let S = "Prepbytes";
// // // // function Count_Vowel(S) {
// // // //     let count = 0;
// // // //     let vowels = "aeiouAEIOU";

   
// // // //     for (let i = 0; i < S.length; i++) {
// // // //         if (vowels.includes(S[i])) {
// // // //             count++;
// // // //         }
// // // //     }

// // // //     return count;
// // // // }

// // // // console.log(Count_Vowel(S)); 


// // // //.....................................QUESTION 4...............................................
let S1 = "Prep ";
let S2 = "bytes";

function Concatenate_Strings(S1, S2) {
    
    return S1.trim() + S2.trim();
}

console.log(Concatenate_Strings(S1, S2)); 


// // // //.......................................QUESTION 5.................................................
// // // let S = "CeDqe";
// // // function findLength(S) {
// // //     let count = 0;
    
// // //     for (let char of S) {
// // //         count++; 
// // //     }
    
// // //     return count;
// // // }

// // // console.log(findLength(S)); 


// // // //...............................QUESTION 6................................................






// // // let S1 = "ADDAAADDDDD";
// // // let S2 = "ADDAAADD";

// // // function Game_Winner(S) {
// // //     let countA = 0;
// // //     let countD = 0;

// // //     for (let char of S) {
// // //         if (char === 'A') {
// // //             countA++; 
// // //         } else if (char === 'D') {
// // //             countD++; 
// // //         }
// // //     }

// // //     if (countA > countD) {
// // //         return "Aditya";
// // //     } else if (countD > countA) {
// // //         return "Danish";
// // //     } else {
// // //         return "Draw";
// // //     }
// // // }

// // // console.log(Game_Winner(S1)); 
// // // console.log(Game_Winner(S2));

// // // //........................QUESTION 7.......................................

// // // let input = "PrepBytes Technologies";
// // // function joinStrings(input) {
   
// // //     let parts = input.split(' ');
// // //     let S = parts[0]; 
// // //     let P = parts[1]; 
    
// // //     let result = ''; 

   
// // //     for (let i = 0; i < S.length; i++) {
// // //         result += S[i]; 
// // //     }
// // //    for (let j = 0; j < P.length; j++) {
// // //         result += P[j]; 
// // //     }

// // //     return result;
// // // }


// // // console.log(joinStrings(input));
 

// // //.........................................QUESTION 8........................
// // let input1 = "Naman";
// // let input2 = "naman";
// // function Plain_Check(S) {
   
// //     S = S.toLowerCase();
    
// //     let length = S.length;


// //     for (let i = 0; i < length / 2; i++) {
// //         if (S[i] !== S[length - 1 - i]) {
// //             return "False"; 
// //         }
// //     }
    
// //     return "True"; 
// // }

// // console.log(Plain_Check(input1)); 

// // console.log(Plain_Check(input2)); 



// //.............................................qUESTION 9.....................................
// let input = "I am utkarsh raj";
// function Reverse_String(S) {
//     let reversedString = ''; 
    
//     for (let i = S.length - 1; i >= 0; i--) {
//         reversedString += S[i]; 
//     }
    
//     return reversedString; 
// }



// console.log(Reverse_String(input)); 
// // .............................................QUESTION 10 ........................................

// let input1 = "Prepbytes";
// let input2 = "Prepbytes";
// let input3 = "Prepbytes";
// let input4 = "PrepByteS";
// function String_Match(S1, S2) {
//     if (S1 === S2) {
//         return "YES"; 
//     } else {
//         return "NO"; 
//     }
// }

// console.log(String_Match(input1, input2)); 
// console.log(String_Match(input3, input4)); 



// //.............................................QUESTION 11 ..........................................

// const S = "Hi, I am You.";
// const pattern = "You";
// const text = "Prepbytes";
// function replacePattern(S, pattern, text) {
//     const result = S.replace(new RegExp(pattern), text);
//     return result;
//   }

//   console.log(replacePattern(S, pattern, text));
  
//...............................................QUESTION !2............................................
// const s = "I am utkarsh raj";
// function Split_the_String(S) {

//     return S.split(" ");
//   }
 
//   console.log(Split_the_String(s));
  

//...............................................QUESTION !3.......................................

// const S = "Prepbytes";
// function Count_Vowels(S) {
//     const vowels = "AEIOUaeiou"; 
//     let count = 0;
  
  
//     for (let i = 0; i < S.length; i++) {
//       if (vowels.includes(S[i])) {
//         count++; 
//       }
//     }
  
//     return count;
//   }

//   function Count_Consonants(S) {
//     const vowels = "AEIOUaeiou"; 
//     let count = 0;
  
    
//     for (let i = 0; i < S.length; i++) {
     
//       if (/[a-zA-Z]/.test(S[i]) && !vowels.includes(S[i])) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
// console.log(Count_Vowels(S), Count_Consonants(S)); 
  
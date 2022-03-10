// const a = 20; 
// const b = 68;
// const c = 250;

// OPERAÇÕES MATEMÁTICAS 
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a % b);
// console.log(a * b);

// let bigger = Math.max(a, b, c);
// console.log(bigger);

// let smaller = Math.min(a, b, c);
// console.log(smaller);




// const a = 20;
// const b = 68;
// const c = 250;

// switch (a, b) {
//     case a > b:
//         console.log(a);

//     case b > a:
//         console.log(b);

// }


function biggestNumber(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c)
    }
}

biggestNumber(10, 20, 30);


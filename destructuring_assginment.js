// var colors = ['red', 'white', 'orange']

// var first = colors[0];
// var second = colors[1];
// var third = colors[2];

// console.log(first, second, third)

// var colors = ['red', 'white', 'orange']
// // var [first, second, third] = colors;
// const [first, second, third] = colors;

// console.log(first, second, third);

// var colors = ['red', 'white', 'orange']

// let [, second] = colors;
// console.log(second);

// var colors = ['red', 'white', 'orange']

// const [, ,third, fourth] = colors;
// console.log(fourth);


// //rest
// const arr = [1, 2, 3, 4, 5]
// const [a, ... b] = arr
// const [,, ... c] = arr

// console.log(a, b, c)

//default

// const [a = 10, b = 20] = [undefined, 5]
// const [c, d = c* 2] = [5]

const arr = [1, [2, [3, 4], 5], 6]
const [a, [b, [, c],], d] = arr
console.log(a, b, c, d)
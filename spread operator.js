var birds = ['eagle', 'pigeon']
var mammals = ['rabbit', 'cat']
var animals = birds.concat('whale').concat(mammals)

console.log(animals)

const animals2 = [...birds, 'whale', ...mammals]

console.log(animals2)

// const values = [20, 10, 30, 50, 40]
// console.log(...values)

// console.log(Math.max(20, 10, 30, 50, 40))
// console.log(Math.max.apply(null, values))
// console.log(Math.max(...values))


const values = [3, 4, 5, 6, 7, 8]
const sum = (...args) => args.reduce((p, c) => p + c)
console.log(sum(1, 2, ...values, 9, 10))

//getter 나머지/ 받는입장
//setter 펼치기/ 주는입장

const str = 'Hello!'
console.log([...str])

//push, concat , unshift 등을 대체 할수 있다

let originaArr = [2,3]
const preArr = [-2, -1]
const sufArr = [6,7]

originaArr.unshift(1) // 원래 배열
originaArr.push(4) // 원래 배열 

originaArr = [0, ...originaArr, 5] // 새로운 배열
console.log(originaArr)


let originalArray2 = [
    {
        first : 'Hello',
        second : 'World!'
    },
    {
        first : 'Welcome',
        second: 'ES6'
    }
]
let copiedArray = [...originalArray2]
console.log(originalArray2[0].first)
copiedArray[0].first = "Hi,"
console.log(originalArray2[0].first)
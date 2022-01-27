// const arr = [1, 2, 3];

// arr.forEach(function (v, i, arr) {
//     console.log(v, i, arr, this)
// }, [10, 11, 12])

// arr.forEach(function (v, i, arr) {
//     console.log(this[i])
// }, [10, 11, 12])

//메소드의 인자의 순서는 중요도 순 ..
//foreach 그냥 for문

//map 은 for문 돌려서 새로운 배열 만드는 목적 return 필수
//reduce for문 돌려서 최종적으로 다른 무언가를 만드는 목적 return 필수

// const a = [1, 2, 3]
// const b = a.map(function (v, i, arr) {
//     console.log(v, i, arr, this)
//     return this[0] + v;
// }, [10])

// const a = [1, 2, 3]
// const res = a.reduce(function (p, c, i, arr) {
//     console.log(p, c, i, arr, this)
//     return p + c;
// }, 10)

// 초기값 없으면 배열의 첫째 값이 초기값으로 (순회 2번)
// const a = [1, 2, 3]
// const res = a.reduce(function (p, c, i, arr) {
//     console.log(p, c, i, arr, this)
//     return p + c;
// })

// const arr = ['a', 'b', 'c', 'd']
// const str = arr.reduce(function (res, item, index, array) {
//     return res + item
// })
// console.log(str)

// const arr = ['a', 'b', 'c', 'd']
// const str = arr.reduce(function (res, item, index, array) {
//     res[item] = item;
//     return res;
// }, {})
// console.log(str)

const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = a.reduce((a, c) => a + c)
console.log(res)
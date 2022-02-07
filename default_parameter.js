// const f = function(x, y ,z){
//     x = x ? x : 4
//     y = y || 5
//     if(!z) {
//         z = 6
//     }
//     console.log(x, y ,z)
// }

// f(1)


// const f = function(x, y ,z){
//     x = x !== undefined ? x : 4
//     y = y || 5
//     if(!z) {
//         z = 6
//     }
//     console.log(x, y ,z)
// }
// f(0, null)


// const f = function (x = 4, y = 5, z = 6) {
//     x = x !== undefined ? x : 4
//     y = y || 5
//     if (!z) {
//         z = 6
//     }
//     console.log(x, y, z)
// }
// f(0, null)

// const f = function (x = 4, y = 5, z = 6) {
//     console.log(x, y, z)
// }
// f(0, null)


// const f = function (a = 1, b = 2, c = 3, d = 4, e = 5, f = 6) {
//     console.log(a, b, c ,d ,e ,f)
// }
// f(7, 0, "", false, null)

// function a (a, b, c){
//     var a = 1;
//     var b = 2;
//     var c = 3;
// }

// a(1, 2, 3)

// function a (a = 1, b = 2, c = 3){
//     let _a = a !== undefined ? a : 1;
//     var b = 2;
//     var c = 3;
// }

// a(1, 2, 3)

// function a (a = 1, b = a + 1, c = 3){
//     console.log(a, b, c);
// }

// a(1, null, 3)

// const notValid = function () {
//     console.error('notValid Called.')
//     return 10
// }

// const sum = function(x = 3 , y = notValid()){
//     console.log(x + y)
// }
// sum(1, 2)
// sum(1)

// let a = 10
// let b = 20
// function f ( aa = a , b = b){
//     console.log(aa, b)
// }

// f(1, 2)
// f(undefined, 2)

//유사배열객체 (array-like object) : 객체인데 , 각 프로퍼티의 키가 인덱스이고 , length라는 프로퍼티가 있는 객체
// const a  = function( a = 1, b = 2, c =3){
//     console.log(arguments)
//     console.log(a, b, c)
// }

// a()
// a(4)
// a(4, 5)
// a(4, undefined, 6)
// a(4, 5, 6)

// const a  = function( a = 1, b = 2, c =3){
//     console.log(arguments)
//     console.log(Array.prototype.pop.call(arguments));
// }

// a(4, 5, 6, 7, 8, 9 , 10)

// const a  = function( a = 1, b = 2, c =3){
//     console.log(arguments)
//     const arg = Array.prototype.slice.call(arguments);
//     console.log(arg.pop());
// }

// a(4, 5, 6, 7, 8, 9 , 10)

const a  = function( a = 1, b = 2, c =3){
    console.log(arguments)
    console.log(a, b, c)
}

a()
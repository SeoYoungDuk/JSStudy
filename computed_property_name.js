// var className = ' Class'
// var obj = {}

// obj.'ab cd' = 'AB CD'

// var className = ' Class'
// var obj = {}

// obj['ab cd'] = 'AB CD'

// var className = ' Class'
// var obj = {'A' + className: 'A급'}


// var className = ' Class'
// var obj2 = {['A' + className] : 'A급'}

// var className = ' Class'
// obj['A' + className] = 'A급'

// const className = 'aaa';
// const obj = {
//     ['A' + className] : '하하'
// }

// let suffix = ' name'
// let iu = {
//     ['last' + suffix]: '이',
//     ['first' + suffix]: '지은'
// }

// console.log(iu)


const count = (function (c){
    return function(){
        c++
    }
})(0)

var obj = {
    [`a_${count()}`]: count(),
    [`a_${count()}`]: count(),
    [`a_${count()}`]: count()

}

console.log(obj)
// function foo (a , b){
//     a = 1
//     arguments[0] = 2
//     console.log(a, arguments[0])
// }

// foo(10, 20)

// function f (x , y, ...z){
//     var rest = Array.prototype.slice.call(arguments, 2)
//     console.log(rest)
// }

// f(1, 2, true, null, undefined, 10)

//오직 한번 , 매개변수의 가장 마지막에서만 
//객체의 setter에서 나머지 쓸 수 없다
//
// function f (...z){
//     console.log(z)
// }

// f(1, 2, true, null, undefined, 10)

const obj = {
    _a : 'a',

    get a() {return this._a;},
    set a(v){ this._a = v}
}

obj.a = 10
console.log(obj.a);
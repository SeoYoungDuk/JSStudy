var a = function () {
    return new Date();
}
var a = () => {return new Date();}

var a = () => new Date();



var b = function(a){
    return a*a;
}

var b = (a) => {return a*a;}

var b = a => a*a;

var c = function (a, b) {
    return a + b;
}

var c = (a, b) =>{return a+b;}

var d = function(a, b) {
    console.log(a * b);
}

var d = (a, b) => {console.log(a*b);}

var e = function (x) {
    return {
        x: x
    }
}

var e = x => ({
    x :x
})


var f = function (a) {
    return function (b){
        return a + b;
    }
}

var f = a => b => a+b;


var b = _ => 10;

const obj = {
    a: function() {
        console.log(this)

        const b = () => {
            console.log(this)
        }
        b()
    }
}

obj.a()

//함수 스코프 다만 실행 컨텍스트 생성시 this 바인딩 x
const a = () => {
    var x = 10;
}
a();
console.log(x);

var total = 0;
const obj = {
    grades: [80, 90, 100],
    getTotal: function() {
        this.total = 0
        this.grades.forEach( function(v) {
            this.total += v
        });
    }
}
obj.getTotal()
console.log(obj.total)

var total = 0;
const obj = {
    grades: [80, 90, 100],
    getTotal: function() {
        this.total = 0
        this.grades.forEach( function(v) {
            this.total += v
        }, this);
    }
}
obj.getTotal()
console.log(obj.total)

var total = 0;
const obj = {
    grades: [80, 90, 100],
    getTotal: function() {
        this.total = 0
        this.grades.forEach( v => {
            this.total += v
        }, this);
    }
}
obj.getTotal()
console.log(obj.total)


const a = function() {
    console.log(this)
}
a()

a.call({})

const a = () => {
    console.log(this)
}
a()

a.call({})

function sum(...arg){
    console.log(this);
    return arg.reduce((p,c) => p+c);
}

const sum2 = (...arg) => {
    console.log(this);
    return arg.reduce((p,c) => p + c);
}

//concise metod 
//arrow function

// 둘다 
// 1. prototype 프로퍼티 x -> 생성자 함수로 X
// 2. arguments, callee -> hidden. invoke 해야만 값을 얻을수 있다.total

// 차이점
// method는메소드로만
// arrow는 함수로만,

const b = {
    name: '하하',
    bb (){
        return this.name;
    },
    a: x => {
        return this.name;
    }
}


const b = {
    name: '하하',
    bb (){
        const b = x => {
            return this.name;
        }
        console.log(b());
    }
}

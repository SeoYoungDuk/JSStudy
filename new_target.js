// function Person (name){
//     if(this instanceof Person){
//         this.name = name
//     }else {
//         throw new Error('new 연산자를 사용하세요.')
//     }
// }

// // Person(1)
// // new Person(1)

// var p1 = new Person('재남')
// console.log(p1)

// // var p2 = Person('성훈')
// // console.log(p2)

// // var p3 = Person.call({}, '곰')
// // console.log(p3)

// var p4 = Person.call(p1, '곰')
// console.log(p4)

// function Person(name) {
//     console.dir(new.target)
//     if(new.target !== undefined){
//         this.name =name
//     }
//     else{
//         throw new Error('new 연산자를 사용하세요.')
//     }
// }

// new Person(1)


// function Person(name) {
//     const af = n => {
//         this.name = n
//         console.log(new.target)
//     }
//     af(name)
// }

// const p1 = new Person


// function Person (name) {
//     this.name = name;
//     return 10;
// }

// function Android (name){
//     const res = Person.call(this, name);
//     console.log(res);
// }

// const p1 = new Android('재남 봇');


class A {
    constructor() {
        if(new.target === A) {throw new Error('얘는 추상 클래스 란다');}
    }
}

class B extends A{
    constructor () {
        super();
    }
}


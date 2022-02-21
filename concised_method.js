// var obj = {
//     name: 'foo',
//     getName: function () {return this.name}
// }

// var obj = {
//     name: 'foo',
//     getName() {return this.name}
// }
// //메소드 축약형은 생성자 함수로 사용 할 수 없다.
// //property를 제거 함으로써 가벼워 지고 성능이 올라감!

// super() // 상위의 클래스를 호출해라

const Person = {
    greeting: function() {return 'hello'}
}

const friend = {
    greeting: function(){
        return 'hi, ' + super.greeting()
    }
}

Object.setPrototypeOf(friend, Person)  
// const Person2 = function() {}
//Person2.prototype.greeting = funtion() {return 'hello'}
//const friend = new Person2();
// friend.greeting = function(){
//     return 'hi, ' + this.__proto__.greeting();
// }
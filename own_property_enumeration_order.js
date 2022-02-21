const obj1 = {
    c: 1,
    2: 2,
    a: 3,
    0: 4,
    b: 5,
    1: 6
}

const keys1 = []
for(const key in obj1) {
    keys1.push(key)
}

console.log(Object.keys(obj1))
console.log(Object.getOwnPropertyNames(obj1))

const obj2 = {
    [Symbol('2')]: true,
    '02': true,
    '10': true,
    '01': true,
    '2':true,
    [Symbol('1')]: true
}

const keys2 = []
for(const key in obj1) {
    keys1.push(key)
}

console.log(keys2)
console.log(Object.keys(obj2))
console.log(Object.getOwnPropertyNames(obj2))
console.log(Reflect.ownKeys(obj2))

//숫자가 먼저오고, 작은수에서 큰수 순서로, 문자열이 입력된 순서 그대로
//앞이 0이 아닌경우 -> 숫자로 인식

const obj3 = Object.assign({}, obj1, obj2)
const keys3 = []
for(const key in obj3){
    keys3.push(key)
}
console.log(keys3)
console.log(Object.keys(obj3))
console.log(Object.getOwnPropertyNames(obj3))
console.log(Reflect.ownKeys(obj3))

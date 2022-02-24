// function a () {}
// console.log(a.name)

// const b = function () {}
// console.log(b.name)

// const c = function cc() {}
// console.log(c.name)

// const d = () => {}
// console.log(d.name)

// const e = {
//     om1: function () {},
//     om2 () {},
//     om3 : () => {}
// }
// console.log(e.om1.name, e.om2.name, e.om3.name)

// class F {
//     static method1 () {}
//     method2 () {}
// }
// function G () {}
// G.method1 = function () {}
// G.prototype.method2 = function() {}

// const f = new F()
// console.log(F.method1.name, f.method2.name)

// const g = new G()
// console.log(G.method1.name, g.method2.name)

// const f = function (a, b) { return a+b;}

// const g = new Function('a','b', 'return a+b')
// console.log(g.name)

// function a () {} 
// const b = function () {}
// const h = a.bind(b)
// console.log(h.name)


// function a () {console.log(this);}
// a.call({})
// a.apply({})

// const b = a.bind({a: 1})
// b()

// function a (x, y, z) {console.log(this, x, y, z);}
// a.call({}, 1, 2, 3)
// a.apply({}, [1, 2, 3])

// const b = a.bind({}, 1, 2)
// b(3)

const person = {
    _name: '재남',
    get name(){
        return this._name
    },
    set name(v) {
        this._name = v
    }
}
const descriptor =  Object.getOwnPropertyDescriptor(person, 'name')
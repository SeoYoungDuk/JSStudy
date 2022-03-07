// const iu = {
//     name : '아이유',
//     age : 25,
//     gender : 'female'
// }
// const {
//     name : n,
//     age : a,
//     gender: g
// } = iu
// console.log(n, a, g)

// const {
//     name,
//     age,
//     gender
// } = iu


// console.log(name, age, gender)


// const loginInfo = {
//     device: {
//         createdAt : '2017-12-06T00:14:04',
//         deviceId: '00000004vx',
//         deviceType: 'desktop'
//     },
//     user: {
//         createdAt : '2017-12-06T00:14:04',
//         email : 'power4ce@gmail.com',
//         name: '정재남',
//         nickname: 'gomugom',
//         phoneNumber : '010-9185-9155'
//     }
// }

// const {
//     device,
//     user: userInfo
// }  = loginInfo;


// const {
//     device:{
//         createdAt,
//         deviceId,
//         deviceType
//     },
//     user: userInfo,
//     user: {
//         createdAt: userCreatedAt,
//         email,
//         name,
//     }
// }  = loginInfo;

// console.log(createdAt)
// console.log(userInfo)


// const phone = {
//     name : 'iPhone',
//     color : undefined
// }

// const {
//     name : n,
//     version: v = '6+',
//     color : c = 'silver'
// } = phone;

// console.log (n,v,c)

// const deliveryProduct = {
//     orderedDate : '2018-01-15' , 
//     estimatedDate : '2018-01-20',
//     status: '배송중',
//     items: [
//         {name: '사과', price: 1000, quantity: 3},
//         {name: '배', price: 1500, quantity: 2},
//         {name: '딸기', price: 2000, quantity: 4}
//     ]
// }

// const {
//     estimatedDate: esti,
//     status,
//     items: [, ...products]
// } = deliveryProduct

// console.log(esti, status, products)

// const getArea = (info) => {
//     const {width, height} = info
//     return width * height
// }

const getArea = ({width, height} = {width :0, height: 0}) => {
    return width * height
}

console.log(getArea({width :10, height : 50}))
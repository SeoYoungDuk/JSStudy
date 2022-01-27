// const a = 20;
// const b = `이게 문자열 입니다. ${a} 변수를 넣을수 있어요!`
// console.log(b)

// const tag = function(strs, arg1, arg2) {
//     return {strs: strs, args: [arg1, arg2]}
// }

// const tag = function(strs, ...args) {
//     return {strs: strs, args}
// }


//무조건 interpolation= ${} 보다 하나가 더 많다.
// const res = tag `순서가 ${1}이렇게 ${2}`
// console.log(res)

// const addSuffix = (strs, ...exps) => {
//     return strs.reduce(function(acc, curr, i){
//         let res = acc + curr + '_suffix '
//         if(exps[i]) res += exps[i]
//         return res
//     }, '')
// }

// console.log(addSuffix `이 함수는${'각 문자열'}마다${'_suffix'}라는 글자를 추가합니다.`)

const setDecimalSeperators = function (strs, ...args) {
    return args.reduce(function (p, c, i){
        return p + strs[i] + (c + '').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
    })
}
const res = setDecimalSeperators `이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총 ${2000 * 1234567}`

console.log(res)


// function headAndTail(list) {
//   list.splice(1, list.length - 2)
//   return list
  
// }

// let a = [1, 2, 3, 4, 5]
// let b = ["a", "b", "c", "f", "k"]

// console.log(headAndTail(a));
// // [1, 5]
// console.log(headAndTail(b));
// // ["a", "k"]


////////////////////////////////////////

//組裝陣列 .contact


function headAndTail(list) {
  return [list[0] ,list[list.length -1]]
}

let a = [1, 2, 3, 4, 5]
let b = ["a", "b", "c", "f", "k"]

console.log(headAndTail(a));
// [1, 5]
console.log(headAndTail(b));
// ["a", "k"]




////////////////////////////////////////

//   indexOf   印出 索引值
//   includes  印出 true or false


// const list = ["a", "b", "c", "d"]

// for (let a = 0; a < list.length ; a++) {
//   console.log(list[a]);
// }


// ////////////////////////////////////////////////
const list = ["a", "b", "c", "d"]

const logger = function(x){
  console.log(x);
}
//匿名函數放到logger

//.forEach(後面放變數) "格式"

//  iteration 歷遍
list.forEach(logger)


                // 陣列中內容 , 索引值
list.forEach (function(x, index){
  console.log(index , x);
})


///////////////////////////////////////////////////

const list2 = ["a", "b", "c", "d"]

// find 只會找到一個 就停下來並 回傳
// indexOf / includes  用在尋找是否存在
const result =list2.find(function(x){
  return x == "c"
})
// callback(回呼) function 

console.log(result);

///////////////////////////////////////////////////

const list3 = [1, 2, 3, 4, 5]

const neww= []

for (let a = 0; a < list3.length ; a++){
  neww[a] = list3[a] * 2;
} 

console.log(neww);

// list3.forEach (function(x){
//   return (2*x);
// })



////////////////////////////////////////////////////////////



//map 回傳值是一個新陣列
const list4 = [1, 2, 3, 4, 5]

let xxx = []

const aaa = list4.map(function (y) {
  xxx.push(y * 2)
}) 

console.log(xxx);

////////////////////////////////////////////////////////////


// js 的function 可以視為一個物件
// 可以互相呼叫




//concat 組裝陣列

// let comicHeroes = ["孫悟空", "魯夫", "宇智波佐助", "琦玉"]
//  let marvelHeroes = ["金剛狼", "鋼鐵人", "奇異博士"]
//  let allHeroes = comicHeroes.concat(marvelHeroes)
//  console.log(allHeroes) // 全部組在一起了








let list = [false,1,0,1,2,0,1,3,"a"]

function moveZerosToEnd(arr) {
  let zero = list.filter((x) => x === 0 )
  //先將 list 中的 0 取出來 => 得到[0 , 0]
  let other = list.filter((y) => y !== 0 )
  //再將剩下的取出成為一個陣列 => 得到 [false,1,1,2,1,3,"a"]
  let newList = other.concat(zero)
  // 在用concat 將兩個陣列組合
  return newList
  //得到答案並且回傳 => [false,1,1,2,1,3,"a",0,0]
}

let result = moveZerosToEnd(list)
console.log(result)  

// [false,1,1,2,1,3,"a",0,0]



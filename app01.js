 let a = 1 

while(a < 10) {
  console.log(123);
  a += 1 
}


//////////////////////////////////////

for (var i = 0; i < 10; i++) {
  if(i > 5){
    break
  }
  console.log(i);
}


// break 
// continue 做流程控制

///////////////////////////////////////
//定意函數
// function declaration (宣告函數)
function hello() {
  console.log(123);
  console.log(456);
  console.log(789);
}

hello()
// 呼叫函數 


// function expression (函數表達)
          //這個函數 => 匿名函數 anonymous fn
const hi = function() {
  console.log(111);
  console.log(222);
  console.log(333);
}



// 用const , let    跟 var 宣告有差別 
// initialization   undefined




// 用var後面定義會把前面定義的蓋掉

// 用const , let重複的話 會出現declared
//(已被宣告常數)的錯誤訊息  



//////////////////////////////////
//        箭頭函式 arrow fn

// const world = function() {
//   console.log(122223333);
// } 
// 變成下面（不是簡寫）


const world = () => {
  console.log(77777777);
} 

world()

////////////////////////////////////////

function sayHello(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

// sayHello(123, 456, 789)

// sayHello(123)
//印出 123, undefined, undefined


sayHello(123, 4, 5, 6, 7)
//多的變數不會理他 
//印出 123, 4, 5



//帶入變數 a, b, c 



//////////////////////////////////////////

//參數 ＶＳ 引數

                  // 參數
function helloWorld(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

            // 引數
helloWorld(123, 456, 789)



//////////////////////////////////////////


                    //參數預設值 : 讓fn有彈性
function default_number(a, b = 1, c = 2) {
  console.log(a);
  console.log(b);
  console.log(c);
}

            // 引數
default_number(11111111)

default_number(123, "a", "b")




//////////////////////////////////////////




// Return Value 回傳值
function add(a, b) {
  // console.log(a + b);
  // 宣告變數 需要用 const let 不然會造成全域污染
  // let result = a + b
  return a + b
}


console.log(add(5 ,6));


// REPL = Read Evaluate Print Loop   ......"irb" 


//   所有的函數都有回傳值？
//   是 undefined 也是回傳值


function index() {
  console.log(123);
  return 666
}


index()



function aaa(n) {
  if (n >= 0) {
    console.log(n);
  } 
}

aaa(8888899999)


function bbb(n) {
  if(n % 2 == 1){
    console.log("a");
  } else {
    console.log("b");
  }
}

bbb(6)


// function count(a, b) {
//   if (a >= 0 && b >= 0) { 
//     return a + b;
//   } else {
//     return "err";
//   }
// }
//(a < 0 || b < 0) "err" "a + b "



// early return
function count(a, b) {
  if (a < 0 || b < 0){
    return "err"
  }
  return a + b 
}



console.log(count(10, 20));
console.log(count(-10, 20));




//////////////////////////////////////


function BMI(height ,weight) {
  let h = height / 100
  let w = weight
  let result = w / (h ** 2)

  return result.toFixed(2)
}

console.log(BMI(170 ,70));



//////////////////////////////////////////////////////

function leapYear(year) {
  return(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
}




console.log(leapYear(2000));

//////////////////////////////////////////////////////////

// 什麼是函數？
//定義輸入值跟輸出值的關係 並給他一個名稱



//////////////////////////////////////////////////////////

// ARRAY

// 定義陣列
// 裡面可以放各種型態
// let data = ["aaa", false , undefined , null , 123]

// 陣列裡面可以放陣列 ： 二維陣列  n維陣列


let x = ["a", "b", "c", "d"]

console.log(x.length);



let list = ["a", "b", "c", "d", "e"]

console.log(list[0]);
console.log(list[1]);

console.log(list[ list.length - 1 ]);
// 最後一個

//////////////////////////////////////////////////

// 新增元素
// push 用在 array

let element = ["a", "b", "c", "d"]

element.push("e")
// 放在陣列最後面
console.log(element);


element.unshift("0")
// 放在陣列最前面
console.log(element);


//////////////////////////////////////////////////

let string = ["a", "b", "c", "d"]

string.pop()
console.log(string)


string.shift()   //移轉 （移除掉） 
console.log(string)


///////////////////////////////////////////////////

let zxc = ["a", "b", "c", "d"]

// zxc.splice(1, 1)
// console.log(zxc);



let arr = ["a", "b", "c", "d"]

arr.splice(2, 0 ,"z")

console.log(arr);


////////////////////////////////////////////////////////








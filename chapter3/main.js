let currentTempC = 16;
console.log(currentTempC);
currentTempC = 22.5;
console.log(currentTempC);
// ------------------------------
let room1 = "会議室A";
console.log(room1);
let currentRoom = room1;
console.log(currentRoom);
// ------------------------------
let currentTemp = 19.5;
// const message = "現在の温度は" + currentTemp + "°Cです"
const message = `現在の温度は${currentTemp}です。\n` +
"もう時期暖かくなるはずですから少々お待ちください。"
console.log(message);
// ------------------------------
const multiline = "1行目\n" + "2行目\n" + "3行目\n";
console.log(multiline);
// ------------------------------

const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED);
console.log(ORANGE);
console.log(RED === BLUE);
console.log(RED === ORANGE);
// ------------------------------
const obj = {};
obj.color = "黄色";
console.log(obj.color);
console.log(obj["color"]);
// ------------------------------
const sam1 = {
  name: "Sam",
  age: 4
};
console.log(sam1);
sam1.greeting = function(){
  return "hello!";
};
console.log(sam1.greeting());
// ------------------------------
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getDay());
// ------------------------------
const numStr = "33.3";
const num = Number(numStr);
console.log(num);
// ------------------------------
const n = 27.5;
const s = n.toString();
console.log(s);
// ------------------------------
const d = new Date();
console.log(d.toString());


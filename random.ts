// 1から6の間の乱数を生成するサンプルコード
const minValue = 1;
const maxValue = 6;
const randomInt = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
console.log(randomInt);
// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// var val1 = "var変数";
// console.log(val1);

// // val変数は上書き可能
// val1 = "val変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "jake",
//   age: 28.
// };
// val4.name = "jak";
// val4.address = "kyoto";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name =  "jake";
// const age = "28";
// // わたしの名前はjakeです。年齢は28歳です。

// // 従来の方法
// const message1 = "わたしの名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `わたしの名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 *アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// return省略
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 省略
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "jake",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["jake", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello();

// 引数に何もない場合、undefinedが表示されてしまう
// こんにちは!undefinedさん!
// (name)の横に上記のようなゲストと設定しておくとデフォルト値を設定できる

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// 146は145と同じになる

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// 参照が引き継がれてしまう。

// arr8[0] = 100;
// // やっぱり100でしたの場合
// console.log(arr4);
// 元のarr4配列も影響を受けてしまう。

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// スプレッド構文で変数を置き換えると元の配列に影響がでない

/**
 * mapやfillterを使った配列の処理
 */
// const nameArr = ["tanaka", "yamada", "jake"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// forを使わないループ.map関数
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name))

// filter関数で配列から取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// 〜目の要素かを取り出す方法

// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// 用途に合わせて引数を追加すると取り出せる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name)=>{
//   if (name === "jake"){
//     return  name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの時 : 条件がfauseの時;
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲ないです';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num =  null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && が左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

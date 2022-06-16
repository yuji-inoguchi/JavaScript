import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
//   //li生成
//   const li = document.createElement("li");

//   // div生成
//   const div = document.createElement("div");
//   div.className = "list-row";

//   // liにdivを追加
//   li.appendChild(div);

//   // pタグ生成
//   const p = document.createElement("p");
//   // inputに入力されたテキストをpタグないに代入
//   p.innerText = inputText;

//   const completeButton = document.createElement("button");
//   completeButton.innerText = "完了";
//   completeButton.addEventListener("click", () => {
//     // 押された完了ボタンの親タグ(li)を未完了リストから削除
//     deleteFromIncompleteList(div.parentNode);

//     // 完了リストに追加する要素
//     const addTarget = div.parentNode;

//     // TODO内容テキストを取得
//     // const text = addTarget.firstElementChild.innerText;

//     // div以下を初期化
//     addTarget.textContent = null;

//     // pタグ生成
//     // const p1 = document.createElement("p");
//     // p1.innerText = text;

//     // buttonタグ生成
//     const backButton = document.createElement("button");
//     backButton.innerText = "戻す";
//     backButton.addEventListener("click", () => {
//       // 推された戻すボタンの親タグ（div）を完了リストから削除
//       const deleteTarget = addTarget02.parentNode;
//       document.getElementById("complete-list").removeChild(deleteTarget);

//       // テキスト取得
//       const text = addTarget02.firstElementChild.innerText;
//       console.log(text);
//     });

//     const addTarget02 = document.createElement("div");
//     addTarget02.className = "list-row";
//     // console.log(text);

//     // divタグの子要素に各要素を設定
//     // liにdivを追加
//     addTarget.appendChild(addTarget02);
//     // divにp,backButtonを追加
//     addTarget02.appendChild(p);
//     addTarget02.appendChild(backButton);

//     // 完了リストに追加
//     document.getElementById("complete-list").appendChild(addTarget);
//   });

//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "削除";
//   deleteButton.addEventListener("click", () => {
//     // 押された削除ボタンの親タグを未完了リストから削除（関数化）
//     deleteFromIncompleteList(div.parentNode);

//     // 関数前
//     // const deleteTarget = div.parentNode
//     // document.getElementById("incomplete-list").removeChild(deleteTarget);
//   });

//   // li>divの子要素にpタグとボタンを追加
//   div.appendChild(p);
//   div.appendChild(completeButton);
//   div.appendChild(deleteButton);

//   // 上記li>div>pを未完了リストに追加
//   document.getElementById("incomplete-list").appendChild(li);
// };

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liにdivを追加
  li.appendChild(div);

  // pタグ生成
  const p = document.createElement("p");
  // inputに入力されたテキストをpタグないに代入
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);

    // 完了リストに追加する要素
    const addTarget = div.parentNode;

    // TODO内容テキストを取得
    // const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    // const p1 = document.createElement("p");
    // p1.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 推された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = addTarget02.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = addTarget02.firstElementChild.innerText;
      createIncompleteList(text);
    });

    const addTarget02 = document.createElement("div");
    addTarget02.className = "list-row";
    // console.log(text);

    // divタグの子要素に各要素を設定
    // liにdivを追加
    addTarget.appendChild(addTarget02);
    // divにp,backButtonを追加
    addTarget02.appendChild(p);
    addTarget02.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除（関数化）
    deleteFromIncompleteList(div.parentNode);

    // 関数前
    // const deleteTarget = div.parentNode
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // li>divの子要素にpタグとボタンを追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 上記li>div>pを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    //未完了のTODOから削除
    deleteFromIncomplete(completeTarget);

    document.getElementById("complete-list").appendChild(completeTarget);
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    completeTarget.appendChild(backButton);
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      backTarget.removeChild(backButton);
      //未完了リストに移動
      const text = backTarget.innerText;
      createIncompleteList(text);
    });
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを削除する
    deleteFromIncomplete(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

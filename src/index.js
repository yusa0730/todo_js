import "./styles.css";

const onClickAdd = () => {
  // console.log(document.getElementById("add-text"));
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonタグ(完了)生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 完了リストに追加する
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    console.log(addTarget);

    // divタグ作成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ作成(戻る)
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";

    div.appendChild(li);
    div.appendChild(backButton);
    document.getElementById("complate-list").appendChild(div);

    const deleteTarget = complateButton.parentNode;
    deleteFromIncomplateList(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncomplateList(deleteTarget);
  });

  // divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(div);
};

const onClickComplate = () => {
  document.getElementById("complate");
};

const deleteFromIncomplateList = (deleteTarget) => {
  document.getElementById("incomplate-list").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

document
  .getElementById("complate-button")
  .addEventListener("click", () => onClickComplate());

let currentPrompt = "";

// JSON読み込み
fetch("./prompt.json")
  .then(res => {
    if (!res.ok) throw new Error("JSON読み込み失敗");
    return res.json();
  })
  .then(data => {

    const card = data.cards[0];

    // 👇ここが重要（存在チェック）
    if(!card || !card.prompt){
      throw new Error("promptが存在しない");
    }

    currentPrompt = card.prompt;

    document.getElementById("title").innerText =
      card.title || "NO TITLE";

    document.getElementById("copyBtn").disabled = false;

  })
  .catch(err => {
    console.error(err);

    document.getElementById("title").innerText =
      "LOAD ERROR (JSON not found)";
  });

// コピー
function copyPrompt(){

  if(!currentPrompt){
    alert("プロンプトが読み込まれていません");
    return;
  }

  navigator.clipboard.writeText(currentPrompt).then(()=>{

    document.getElementById("toast").classList.add("show");

    document.getElementById("guide").style.display = "block";
    document.getElementById("openBtn").style.display = "block";

    setTimeout(()=>{
      document.getElementById("toast").classList.remove("show");
    },1200);

  });

}

// ChatGPTを開く
function openGPT(){
  window.open("https://chat.openai.com", "_blank");
}

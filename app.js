let jsonData = null;

// JSON読み込み
fetch("./prompt.json")
  .then(res => res.json())
  .then(data => {
    jsonData = data;
  })
  .catch(err => {
    console.error("JSON load error", err);
  });

// 👇全部コピー
function copyJSON(){

  if(!jsonData){
    alert("JSONまだ読み込まれてない");
    return;
  }

  const text = JSON.stringify(jsonData, null, 2);

  navigator.clipboard.writeText(text).then(()=>{

    const toast = document.getElementById("toast");
    const guide = document.getElementById("guide");

    toast.innerText = "COPIED ✔ FULL PROMPT";
    toast.classList.add("show");

    guide.innerText =
      "コピー完了。\nChatGPTに貼り付け画像生成モードで実行してください。";

    guide.style.display = "block";

    document.getElementById("openBtn").style.display = "block";

    setTimeout(()=>{
      toast.classList.remove("show");
    },1200);

  });

}

// ChatGPTを開く
function openGPT(){
  window.open("https://chat.openai.com", "_blank");
}

let config = null;

fetch("./prompt.json")
  .then(res => res.json())
  .then(data => {

    config = data;

    // UIテキスト全部JSONから取得
    document.getElementById("copyBtn").innerText =
      config.ui.copyLabel;

    document.getElementById("openBtn").innerText =
      config.ui.openLabel;

  });

// コピー
function copyPrompt(){

  navigator.clipboard.writeText(config.prompt).then(()=>{

    document.getElementById("toast").innerText =
      config.messages.toast;

    document.getElementById("toast").classList.add("show");

    document.getElementById("guide").innerText =
      config.messages.guide;

    document.getElementById("guide").style.display = "block";

    document.getElementById("openBtn").style.display = "block";

    setTimeout(()=>{
      document.getElementById("toast").classList.remove("show");
    },1200);

  });

}

// ChatGPTを開く
function openGPT(){
  window.open(config.actions.chatgptUrl, "_blank");
}

let currentPrompt = "";

// JSON読み込み
fetch("prompt.json")
  .then(res => res.json())
  .then(data => {

    const card = data.cards[0];

    document.getElementById("title").innerText =
      card.id + " / " + card.title;

    currentPrompt = card.prompt;

    document.getElementById("copyBtn").disabled = false;
  });

// コピー
function copyPrompt(){

  if(!currentPrompt) return;

  const toast = document.getElementById("toast");
  const openBtn = document.getElementById("openBtn");

  navigator.clipboard.writeText(currentPrompt).then(()=>{

    // トースト表示
    toast.classList.add("show");

    // コピー成功でボタン表示
    openBtn.style.display = "block";

    setTimeout(()=>{
      toast.classList.remove("show");
    },1200);

  });
}

// ChatGPTを開く
function openGPT(){
  window.open("https://chat.openai.com", "_blank");
}

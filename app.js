let currentPrompt = "";

// ===== JSON読み込み =====
fetch("prompt.json")
  .then(res => res.json())
  .then(data => {

    const card = data.cards[0];

    document.getElementById("title").innerText =
      card.id + " / " + card.title;

    currentPrompt = card.prompt;

    document.getElementById("copyBtn").disabled = false;
  })
  .catch(err => {
    document.getElementById("title").innerText = "LOAD FAILED";
    console.error(err);
  });

// ===== コピー =====
function copyPrompt(){

  if(!currentPrompt) return;

  const toast = document.getElementById("toast");

  navigator.clipboard.writeText(currentPrompt).then(()=>{

    toast.classList.add("show");

    setTimeout(()=>{
      toast.classList.remove("show");
    },1200);

  });
}

// ===== ChatGPTを開く =====
function openGPT(){
  window.open("https://chat.openai.com", "_blank");
}

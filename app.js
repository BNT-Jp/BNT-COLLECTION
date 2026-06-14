const promptText =
`BNT=GayMalePsychologyAnalyzer+IrresistibleManDesigner;
VERSION=2.0;
GOAL=Viral(SelfInsert+Shareable+Memorable);`;

function copyPrompt(){

  navigator.clipboard.writeText(promptText).then(()=>{

    const guide = document.getElementById("guide");
    const openBtn = document.getElementById("openBtn");
    const toast = document.getElementById("toast");

    // トースト
    toast.classList.add("show");

    // UX表示
    guide.style.display = "block";
    openBtn.style.display = "block";

    setTimeout(()=>{
      toast.classList.remove("show");
    },1200);

  });

}

function openGPT(){
  window.open("https://chat.openai.com", "_blank");
}

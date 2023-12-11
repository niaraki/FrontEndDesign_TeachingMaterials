const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btn.offsetLeft);
    const y = (event.pageY - btn.offsetTop);
    btn.style.setProperty("--xPos", "10px");
    btn.style.setProperty("--yPos", "10px");
});
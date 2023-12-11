const imageContainer = document.querySelector(".image-container");
const prevBtn= document.getElementById("prev");
const nextBtn= document.getElementById("next");

let x = 0;
let timerHandler;
let isLastPrevClicked = false;

function resetTimer() {
    clearTimeout(timerHandler);
}

prevBtn.addEventListener("click", ()=>{
    x += 45;
    x = x % 360;
    clearTimeout();
    updateGallery();
    isLastPrevClicked=true;
});

nextBtn.addEventListener("click", ()=>{
    x -= 45;
    x = x % 360;
    clearTimeout();
    updateGallery();
    isLastPrevClicked=false;
});

function 
updateGallery()
{
    imageContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    /*timerHandler=setTimeout(()=>{
        if(isLastPrevClicked)
        x+=45;
        else 
        x-=45;
        x = x % 360;
        updateGallery();
    },3000);*/
}

//updateGallery();

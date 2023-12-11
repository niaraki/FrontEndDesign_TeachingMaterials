const bgImage = document.getElementById("bg-image");
window.addEventListener("scroll",()=>{
    updateImage();
});

function updateImage()
{
    bgImage.style.opacity= 1-window.pageYOffset/800; 
    bgImage.style.backgroundSize= 160-window.pageYOffset/12 + "%"; 
}

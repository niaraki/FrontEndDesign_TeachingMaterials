const totalcounter = document.getElementById("totalcounter");
const remainedcounter = document.getElementById("remainedcounter");
const textarea = document.getElementById("textarea1");

function updatecounter(){
    totalcounter.innerText = textarea.value.length;
    remainedcounter.innerText = textarea.getAttribute("maxLength") - textarea.value.length;
}

textarea.addEventListener("keyup",()=>{
    updatecounter();
});

updatecounter();
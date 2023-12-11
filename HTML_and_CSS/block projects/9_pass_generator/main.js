const btnGen = document.getElementById("btngenerate");
const txtPassword = document.getElementById("txtpass");
const btnCopy= document.getElementById("btnCopy");
const alert= document.querySelector(".alert-container");

btnGen.addEventListener("click",()=>{
    createPassword();
});

btnCopy.addEventListener("click",()=>{
    copyPassword();
});

function copyPassword(){
    if(!txtPassword.value)return;
    txtPassword.select();
    txtPassword.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(txtPassword.value);
    alert.innerText=txtPassword.value + " copied!";
    alert.classList.remove("disactive");
    setTimeout(() => {
        alert.classList.add("disactive");
    }, 3000);
}

function createPassword() {
    const chars = "0123456789abcdefghijlkon@$38";
    let passwrod = "";
    for(let i =0; i<14; ++i) {
        const rnd = Math.floor(Math.random() * (chars.length-1));
        passwrod += chars.substring(rnd,rnd+1);
    }
    txtPassword.value = passwrod;
}


const container = document.querySelector(".container");

for(let i = 0; i < 30; ++i)
{
    const colorContainerElement = document.createElement("div");
    const color =  GenerateRandomColor();
    console.log(color);
    colorContainerElement.classList.add("color-container");
    colorContainerElement.style.backgroundColor = color;
    colorContainerElement.innerHTML=`<b>${color}</b>`;
    container.appendChild(colorContainerElement);
}


function GenerateRandomColor()
{
    let colorCode = "";
    const chars = "0123456789abcdef";
    const colorLength = 6;
    for(let i = 0 ; i< colorLength; ++i) {
        const rnd = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(rnd,rnd+1);
    }
    return "#" + colorCode;
}
setInterval(()=>{
    let strHour = document.getElementById("hour");
    let strMinute = document.getElementById("minute");
    let strSecond = document.getElementById("second");
    let strAmpm = document.getElementById("ampm");
    var date = new Date();
    let hours = (date.getHours() > 12) ?("0" + (date.getHours() - 12)): date.getHours();
    strAmpm.innerText = (date.getHours() > 12 )?"PM":"AM";

    strHour.innerText = (hours < 10)? "0"+hours : hours; 
    strMinute.innerText = (date.getMinutes() < 10)? "0" + date.getMinutes():date.getMinutes();
    strSecond.innerText = (date.getSeconds() < 10)? "0" + date.getSeconds():date.getSeconds();

},1000);
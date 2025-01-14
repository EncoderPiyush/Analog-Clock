let hourEl=document.getElementById("hour");
let minEl=document.getElementById("min");
let secEl=document.getElementById("sec");

let displayTime=()=>{
    let date=new Date();
    //Getting hr,min,sec from date

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hourEl.style.transform=`rotate(${hRotation}deg)`;
    minEl.style.transform=`rotate(${mRotation}deg)`;
    secEl.style.transform=`rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000)
let timer;
let sec =0;
let min =0;
let hour =0;
let Time = document.querySelector("#timer")
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let continuBtn = document.querySelector("#continu");

startBtn.addEventListener("click",()=>{
    timer = setInterval(TikTak, 1000);
    stopBtn.style.display="inline-block";
    resetBtn.style.display="inline-block";
    startBtn.style.display="none";
    continuBtn.style.display="none"
});

continuBtn.addEventListener("click",()=>{
    stopBtn.style.display="inline-block";
    resetBtn.style.display="inline-block";
    startBtn.style.display="none";
    continuBtn.style.display="none"
    timer = setInterval(TikTak, 1000);
});

stopBtn.addEventListener("click",()=>{
    stopBtn.style.display="none";
    resetBtn.style.display="inline-block";
    startBtn.style.display="none";
    continuBtn.style.display="inline-block"
    timer = clearInterval(timer);
});

resetBtn.addEventListener("click",()=>{
    resetBtn.style.display="none";
    stopBtn.style.display="none";
    startBtn.style.display="inline-block";
    continuBtn.style.display="none"
    timer = clearInterval(timer);
    sec=0;
    min =0;
    hour =0;
    Time.innerHTML="00:00:00";
});

function TikTak(){
    sec++;
    if(sec ==60 ){
        sec=0;
        min++;
    }
    if (min==60) {
        min=0;
        hour++;
    }

    DisplayTime();}

function DisplayTime(){
    let Sec;
    let Min;
    let Hour;

    (sec<  10?  Sec= '0'+sec : Sec=sec);
    (min<  10?  Min= '0'+min : Min=min);
    (hour< 10? Hour= '0'+hour: Hour=hour);

    Time.innerHTML= Hour + ":" + Min + ":" + Sec ;
}


var start = document.getElementById("start")
var stop =document.getElementById("stop")
var reset = document.getElementById("reset")

var wm =document.getElementById('w_minutes')
var ws = document.getElementById("w_seconds")
var bm = document.getElementById("b_minutes")
var bs =document.getElementById("b_seconds")
var startTimer ;

function timer() {
    if(ws.innerText != 0){
        ws.innerText--;
    }else if (wm.innerText!=0 && ws.innerText== 0){
        ws.innerText = 59;
        wm.innerText -- ;

    }
    else if (wm.innerText== 0 && ws.innerText==0){
        bs.innerText -- ;
    }else if (bm!=0 && bs.innerText==0){
        bs.innerText=59;
        bm.innerText--;
    }
     else if (wm.innerText==0 && ws.innerText==0 && bm.innerText==0 &&bs.innerText==0){
        wm.innerText == 25;
        ws.innerText == "00";

        bm.innerText== 5;
        bs.innerText == "00";
    }
}
start.addEventListener("click", function (){
    if (startTimer=== undefined){
        startTimer = setInterval(timer, 1000)
    }else {
        alert("Timer is working")
    }

} )

stop.addEventListener("click", function (){
    stopInterval()
    startTimer=undefined;
})

reset.addEventListener("click", function (){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText= 5;
    bs.innerText = "00";
    stopInterval ()
    startTimer=undefined;
})

function stopInterval (){
    clearTimeout(startTimer)
}
let second= 0;
let minute= 0;
let hour= 0;
let timer = null;

function start() {
    if(timer != null) return;
    timer = setInterval(updateTime, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}
function reset(){
    stop();
    second = minute = hour = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = ""
}
function lap(){
    let laptime = document.getElementById("display").innerHTML;
    let li = document.createElement("li");
    li.innerText = laptime;
    document.getElementById("laps").appendChild(li);
}
function updateTime(){
    second  ++;
    if(second === 60){
        second = 0;
        minute ++;
    }
    if(minute === 60){
        minute = 0;
        hour ++;
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
}
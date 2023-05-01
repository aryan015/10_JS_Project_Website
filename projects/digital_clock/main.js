let hours = 0;
let minutes = 0;
let seconds = 0;

let hour = document.getElementById('hour');
let minute= document.getElementById("minute");
let second = document.getElementById("second");


setInterval(appendHour,1000);
setInterval(appendMinute,1000);
setInterval(appendSecond,1000);


function appendHour(){
    hours = new Date().getHours();
    hours > 9
      ? (hour.textContent = hours)
      : (hour.textContent = "0"+hours);
}

function appendMinute(){
    minutes = new Date().getMinutes();
    minutes > 9
      ? (minute.textContent = minutes)
      : (minute.textContent = "0"+minutes);
}

function appendSecond(){
    seconds = new Date().getSeconds();
    seconds > 9
      ? (second.textContent = seconds)
      : (second.textContent = "0"+seconds);
}

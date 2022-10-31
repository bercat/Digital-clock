

const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");



function updateClock() {
   
    let hour = new Date().getHours()
    let min = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    let ampm = "AM";

    
    if (hour > 12 ) {
        hour = hour - 12;
        ampm = "PM";

    }

    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    hourElement.innerText = hour;
    minElement.innerText = min;
    secondsElement.innerText = seconds;
    ampmElement, (innerText = ampm);


    setTimeout(() => {

        updateClock()

    }, 1000)
}

updateClock()
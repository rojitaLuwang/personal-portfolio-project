
const d = new Date();
let textDate = d.toDateString();
document.getElementById("displayDate").innerHTML = textDate;

setInterval(() => {
    const time = new Date();
    var textTime = time.toLocaleTimeString();
    document.getElementById("displayTime").innerHTML = textTime;
  }, 1000);
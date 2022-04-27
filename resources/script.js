
const d = new Date();
let textDate = d.toDateString();
document.getElementById("displayDate").innerHTML = textDate;

setInterval(() => {
    const time = new Date();
    var textTime = time.toLocaleTimeString();
    document.getElementById("displayTime").innerHTML = textTime;
  }, 1000);

  function changeImage(){
      let imageSource = document.getElementById("potrait");
      if(imageSource.src === "./resources/images/flower.jpg"){
          imageSource.src = "./resources/images/potrait.jpg"
      }else if(imageSource.src != "./resources/images/flower.jpg"){
          imageSource.src = "./resources/images/flower.jpg";
      }
  }
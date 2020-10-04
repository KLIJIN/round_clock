setInterval(setClock, 1000);

const hourHand = document.querySelector('#hour'),
 minuteHand = document.querySelector('#min'),
 secondHand = document.querySelector('#sec');
 

function setClock() {
    const currentDate = new Date(),
   secondsRatio = currentDate.getSeconds() / 60,
   minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
   hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
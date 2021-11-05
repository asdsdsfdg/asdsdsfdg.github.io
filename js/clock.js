const clock = document.querySelector("#clock");

function getClock() {
  //시계를 만드는 함수.
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //padstart는 반드시 string에
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이거 안하면 처음에 00:00:00으로 뜨기 때문에 추가.
setInterval(getClock, 1000); //1초마다 반복실행.

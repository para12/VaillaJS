const time = document.querySelector('.time'),
      time_text = time.querySelector('.time_text');

function getTime(){
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  time_text.innerText = `${hour<10?`0${hour}`:`${hour}`}:${min<10?`0${min}`:`${min}`}:${second<10?`0${second}`:`${second}`}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();

const date = require("date-and-time");

const pattern = date.compile("dddd MMM DD YYYY hh mm ss A");

const newDate = () => {
  let now = new Date();
  let currentTime = date.format(now, pattern);
  return currentTime;
};

const speaking = (time) => {
  console.log(time);
};

setInterval(function () {
  let currentTime = newDate();
  // console.log(currentTime);
  currentTime = currentTime.split(" ");
  document.getElementById("ampm").innerHTML = currentTime[7];
  document.getElementById("time").innerHTML =
    currentTime[4] + ":" + currentTime[5] + ":" + currentTime[6];
  document.getElementById("date").innerHTML =
    currentTime[0] +
    "," +
    currentTime[2] +
    "," +
    currentTime[1] +
    "," +
    currentTime[3];
}, 1000);

document.getElementById("speaker").addEventListener("click", (event) => {
  // https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=Thetimeis+,+4+50
  // var currentTime = newDate();
  event.preventDefault();

  let currentTime = document.getElementById("time").innerText;
  let ampm = document.getElementById("ampm").innerText;

  console.log(currentTime);
  console.log(ampm);
  // *! Thursday Sep 24 2020 /////12 35 02///// PM //
  currentTime = currentTime.split(":");

  var time = `The time is,${currentTime[0]},${currentTime[1]} `;
  console.log(time);
  // console.log(typeof time);

  //*! The time is,01,01///////
  let url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${time}${ampm}`;
  url = encodeURI(url);

  let audio = document.createElement("AUDIO");
  audio.setAttribute("src",url);
  audio.play(); 

  console.log(url);
});

/*
0: "Saturday"
1: "Jul"
2: "18"
3: "2020"
4: "09"
5: "42"
6: "21"
*/

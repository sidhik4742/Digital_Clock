const date = require("date-and-time");

const pattern = date.compile("dddd MMM DD YYYY hh mm ss A");

//*? Genarate and format date/////////
const newDate = () => {
  let now = new Date();
  let currentTime = date.format(now, pattern);
  return currentTime;
};

//*? created a audio element in the dom and play the audio string//////
const speaking = (url) => {
  console.log(url);
  let audio = document.createElement("AUDIO");
  audio.setAttribute("src", url);
  audio.play();

  console.log(url);
};

//*? Take value frome the dom and create url////////
const createUrl = () => {
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
  return url;
};

//*? update dom element every 1 sec/////////
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

//*? hour timer set to every hour and automatically talk time///////////
setInterval(function () {
  let currentTime = document.getElementById("time").innerText;
  currentTime = currentTime.split(":");
  if (currentTime[1] == "00") {
    console.log("This is the one hour timer");
    speaking(createUrl());
  }
}, 60 * 1000);

//*? an event is trigger when pressing a speaker icon/////////
document.getElementById("speaker").addEventListener("click", (event) => {
  // https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=Thetimeis+,+4+50
  // var currentTime = newDate();
  event.preventDefault();
  speaking(createUrl());
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

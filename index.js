const date = require("date-and-time");
const pattern = date.compile("dddd MMM DD YYYY hh mm ss A");

setInterval(function () {
  var now = new Date();
  let currentTime = date.format(now, pattern);
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

/*
0: "Saturday"
1: "Jul"
2: "18"
3: "2020"
4: "09"
5: "42"
6: "21"
*/

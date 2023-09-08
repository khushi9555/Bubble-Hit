// We use mainly concept of event bubbling in this program
var score = 0;
var timer = 60;
var hitrn = 0;

function makeBubble() {
  var clutter = "";
  var counter = 0;
  for (var i = 1; i <= 91; i++) {
    var num = Math.floor(Math.random() * 26);
    var rchar = String.fromCharCode(65 + num);
    if (counter == 0) {
      clutter += `<div class="bubble bubble1">${rchar}</div>`;
      counter++;
    } else if (counter == 1) {
      clutter += `<div class="bubble bubble2">${rchar}</div>`;
      counter++;
    } else if (counter == 2) {
      clutter += `<div class="bubble bubble3">${rchar}</div>`;
      counter++;
    } else if (counter == 3) {
      clutter += `<div class="bubble bubble4">${rchar}</div>`;
      counter++;
    } else if (counter == 4) {
      clutter += `<div class="bubble bubble5">${rchar}</div>`;
      counter++;
    } else {
      clutter += `<div class="bubble bubble6">${rchar}</div>`;
      counter = 0;
    }
    if (i % 9 == 0) {
      counter++; // to change order of color
    }
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerid = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerid); // timerid is intervalId for cancelling the action
      document.querySelector("#pbtm").innerHTML = `<h1 class ="abc" >Score = ${
        document.querySelector("#scoreval").textContent
      } </h1> <br><div class="button-div">
      <button class="btn" onclick="location.reload();">Play again</button>
    </div>`;

      document.querySelector("#ptop").innerHTML = `<h2 class="xyz" >Game Over !</h2>`;
    }
  }, 1000);
}

function refreshbubble() {
  var timerid = setInterval(() => {
    if (timer > 0) {
      makeBubble();
    } else {
      clearInterval(timerid);
    }
  }, 3000);
}

function getNewHit() {
  num = Math.floor(Math.random() * 26);
  var rchar = String.fromCharCode(65 + num);
  hitrn = rchar.charCodeAt(0);
  document.querySelector("#hitval").textContent = rchar;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  // console.log(details.target.textContent.charCodeAt(0));
  var clickednum = details.target.textContent.charCodeAt(0);
  if (clickednum == hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
refreshbubble();

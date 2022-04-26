let str = "open come into people america touch slight tin crip walk";

let divtoadd = document.getElementById("textdiv");

let typeinme = document.getElementById("type");

let timer = document.getElementById("timer");

let butt = document.getElementById("resetbtn");

for (const c of str.split("")) {
  let span = document.createElement("span");
  span.innerHTML = c;
  divtoadd.appendChild(span);
}

let started = false;
let startTime;
let start;
let totaltime;

typeinme.addEventListener("input", function (event) {
  let mytext = typeinme.value; //You already have the element as a variable
  let splittext = mytext.split("");
  let spans = divtoadd.children;

  if (!started) {
    started = true;
    startTime = Date.now();
    start = setInterval(startTimer, 1);
  }

  let allcorrect = true;

  for (let x = 0; x < spans.length; x++) {
    if (splittext[x] == null) {
      spans[x].style.color = "black";
      spans[x].style.textDecoration = "none";
      allcorrect = false;
    } else if (splittext[x] !== spans[x].innerHTML) {
      spans[x].style.color = "red";
      spans[x].style.textDecoration = "underline";
      allcorrect = false;
    } else {
      spans[x].style.color = "green";
      spans[x].style.textDecoration = "none";
    }
  }

  if (allcorrect) {
    started = false;
    clearInterval(start);
    document.getElementById("wpm").innerHTML = Math.round((str.length / 5 / totaltime) * 60) + " wpm";
  }
});

function startTimer() {
  totaltime = Math.round(100 * ((Date.now() - startTime) / 1000)) / 100;
  document.getElementById("wpm").innerHTML = Math.round((type.value.length / 5 / totaltime) * 60) + " wpm";
  timer.innerHTML = totaltime + " sec";
}

butt.addEventListener("click", function (event) {
  typeinme.value = "";
  started = false;
  clearInterval(start);
  document.getElementById("wpm").innerHTML = "0 wpm";
  timer.innerHTML = "0.00" + " sec";
  for (const y of divtoadd.children) {
    y.style.color = "black";
    y.style.textDecoration = "none";
  }
});

"use strict";
let startButton = document.querySelector("#start");
let resetButton = document.querySelector("#reset");
let stopButton = document.querySelector("#stop");
let h;
let m;
let s;
let hSelector = document.querySelector("#hour");
let mSelector = document.querySelector("#minute");
let sSelector = document.querySelector("#second");
function timeInput() {
    h = parseInt(hSelector.value) || 0;
    m = parseInt(mSelector.value) || 0;
    s = parseInt(sSelector.value) || 0;
}
let startTimer = null;
function timer() {
    timeInput();
    if (h == 0 && m == 0 && s == 0) {
        h = 0;
        m = 0;
        s = 0;
    }
    else if (s != 0) {
        s--;
        sSelector.value = s;
    }
    else if (m != 0 && s == 0) {
        s = 59;
        m -= 1;
        sSelector.value = s;
        mSelector.value = m;
    }
    else if (h != 0 && m == 0 && s == 0) {
        m = 60;
        h--;
        mSelector.value = m;
        hSelector.value = h;
    }
    return;
}
// startButton.addEventListener("click", function () {
//     function startInterval() {
//         startTimer = setInterval(function () {
//             timer()
//         }, 1000)
//     };
//     startInterval();
// });
startButton.addEventListener("click", startInterval);
stopButton.addEventListener("click", stopInterval);
function startInterval() {
    startTimer = setInterval(function () {
        timer();
    }, 1000);
}
;
resetButton.addEventListener("click", function () {
    hSelector.value = 0;
    mSelector.value = 0;
    sSelector.value = 0;
    stopInterval();
});
function stopInterval() {
    clearInterval(startTimer);
}

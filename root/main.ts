let startButton: any = document.querySelector("#start");
let resetButton: any = document.querySelector("#reset");
let stopButton: any = document.querySelector("#stop");


let h: number;
let m: number;
let s: number;


let hSelector: any = document.querySelector("#hour")
let mSelector: any = document.querySelector("#minute")
let sSelector: any = document.querySelector("#second")


function timeInput() {
    h = parseInt((hSelector as HTMLInputElement).value) || 0;
    m = parseInt((mSelector as HTMLInputElement).value) || 0;
    s = parseInt((sSelector as HTMLInputElement).value) || 0;
}


let startTimer: any = null;


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
stopButton.addEventListener("click", stopInterval)


function startInterval() {
    startTimer = setInterval(function () {
        timer()
    }, 1000);
};


resetButton.addEventListener("click", function () {
    hSelector.value = 0;
    mSelector.value = 0;
    sSelector.value = 0;
    stopInterval();
});


function stopInterval() {
    clearInterval(startTimer);
}
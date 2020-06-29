var bootScreen = document.getElementById("bootScreen");
var bootProgressBar = document.getElementById("bootProgressBar");
var lockScreen = document.getElementById("lockScreen");

//Boot progress bar
var progressBarValue = 0
function bootProgress() {
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    if (progressBarValue == 501) {
        clearInterval(updateProgressBar);
        bootScreen.style.display = "none";
        lockScreen.style.visibility = "visible";
        lockScreen.style.width = screenWidth + "px";
        lockScreen.style.height = screenHeight + "px";
    } else {
        bootProgressBar.value = progressBarValue;
        progressBarValue++
    }
}

let updateProgressBar = setInterval(bootProgress,10)



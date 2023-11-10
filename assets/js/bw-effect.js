function turnColor(x) {
    x.style.filter = "grayscale(0%)";
    x.style.transition = "all 2s linear";
}

function turnGray(x) {
    x.style.filter = "grayscale(100%)";
    x.style.transition = "all 2s linear";
}
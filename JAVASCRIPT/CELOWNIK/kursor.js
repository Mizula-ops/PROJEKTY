document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementsByClassName("board")[0];
    const cross = document.getElementById("cross");
     board.addEventListener("mousemove", function (e) {
        cross.style.left = `${e.offsetX}px`;
        cross.style.top =  `${e.offsetY}px`;
    });
    board.addEventListener("mouseover", function () {
        cross.style.display = "";
    });
    board.addEventListener("mouseout", function () {
        cross.style.display = "none";
    });
});
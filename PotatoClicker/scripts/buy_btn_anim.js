document.addEventListener('DOMContentLoaded', function () {
    const buy_Btns = document.getElementsByClassName("buy_btn");

    Array.prototype.forEach.call(buy_Btns, function (buy_Btn) {
        buy_Btn.addEventListener("mousedown", function () {
            buy_Btn.classList.remove("release_btn");
            buy_Btn.classList.add("press_btn");
        });

        buy_Btn.addEventListener("mouseup", function () {
            buy_Btn.classList.remove("press_btn");
            buy_Btn.classList.add("release_btn");
        });

        buy_Btn.addEventListener("mouseleave", function () {
            buy_Btn.classList.remove("press_btn");
            buy_Btn.classList.add("release_btn");
        });

        // Для мобильных устройств
        buy_Btn.addEventListener("touchstart", function () {
            buy_Btn.classList.remove("release_btn");
            buy_Btn.classList.add("press_btn");
        });

        buy_Btn.addEventListener("touchend", function () {
            buy_Btn.classList.remove("press_btn");
            buy_Btn.classList.add("release_btn");
        });

        buy_Btn.addEventListener("touchcancel", function () {
            buy_Btn.classList.remove("press_btn");
            buy_Btn.classList.add("release_btn");
        });
    });
});

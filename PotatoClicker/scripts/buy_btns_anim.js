document.addEventListener('DOMContentLoaded', function () {
    const card_buy_btns = document.getElementsByClassName("card_buy_btn");

    Array.prototype.forEach.call(card_buy_btns, function (card_buy_btn) {
        card_buy_btn.addEventListener("mousedown", function () {
            card_buy_btn.classList.remove("release_card_buy_btn");
            card_buy_btn.classList.add("press_card_buy_btn");
        });

        card_buy_btn.addEventListener("mouseup", function () {
            card_buy_btn.classList.remove("press_card_buy_btn");
            card_buy_btn.classList.add("release_card_buy_btn");
        });

        card_buy_btn.addEventListener("mouseleave", function () {
            card_buy_btn.classList.remove("press_card_buy_btn");
            card_buy_btn.classList.add("release_card_buy_btn");
        });

        // Для мобильных устройств
        card_buy_btn.addEventListener("touchstart", function () {
            card_buy_btn.classList.remove("release_card_buy_btn");
            card_buy_btn.classList.add("press_card_buy_btn");
        });

        card_buy_btn.addEventListener("touchend", function () {
            card_buy_btn.classList.remove("press_card_buy_btn");
            card_buy_btn.classList.add("release_card_buy_btn");
        });

        card_buy_btn.addEventListener("touchcancel", function () {
            card_buy_btn.classList.remove("press_card_buy_btn");
            card_buy_btn.classList.add("release_card_buy_btn");
        });
    });
});
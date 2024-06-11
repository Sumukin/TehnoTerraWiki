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

document.addEventListener('DOMContentLoaded', function () {
    const text_count_potatos = document.getElementById("text_count_potatos");
    var count_potatos = localStorage.getItem('count_potatos') ? parseInt(localStorage.getItem('count_potatos'), 10) : 0; // Инициализация переменной

    text_count_potatos.textContent = count_potatos; // Обновление значения при загрузке страницы

    const PotatoWorld = document.getElementById("PotatoWorld");

    PotatoWorld.addEventListener("mousedown" || "touchstart", function () {
        count_potatos = count_potatos - 10;
        text_count_potatos.textContent = count_potatos;
        localStorage.setItem('count_potatos', count_potatos);
        console.log(count_potatos);
    });
});
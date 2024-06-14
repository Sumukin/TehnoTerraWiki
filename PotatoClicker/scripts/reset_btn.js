document.addEventListener('DOMContentLoaded', function () {
    const reset_btn = document.getElementById("reset_btn");

    reset_btn.addEventListener("click", function () {
        localStorage.clear()
        const text_count_ptts = document.getElementById("text_count_ptts");
        let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0;
        var income = 1;
        localStorage.setItem('income', income);
        text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
        console.log("Прогресс сброшен.");
    });

    // Анимация кнопки
    reset_btn.addEventListener("mousedown", function () {
        reset_btn.classList.remove("release_reset_btn");
        reset_btn.classList.add("press_reset_btn");
    });

    reset_btn.addEventListener("mouseup", function () {
        reset_btn.classList.remove("press_reset_btn");
        reset_btn.classList.add("release_reset_btn");
    });

    reset_btn.addEventListener("mouseleave", function () {
        reset_btn.classList.remove("press_reset_btn");
        reset_btn.classList.add("release_reset_btn");
    });

    // Для мобильных устройств
    reset_btn.addEventListener("touchstart", function () {
        reset_btn.classList.remove("release_reset_btn");
        reset_btn.classList.add("press_reset_btn");
    });

    reset_btn.addEventListener("touchend", function () {
        reset_btn.classList.remove("press_reset_btn");
        reset_btn.classList.add("release_reset_btn");
    });

    reset_btn.addEventListener("touchcancel", function () {
        reset_btn.classList.remove("press_reset_btn");
        reset_btn.classList.add("release_reset_btn");
    });
});

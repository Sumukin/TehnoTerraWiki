import { updatePttsCount } from './text_update.js';
import { updatePttsIncome } from './text_update.js';
import { updateBuyBtnStatus } from './text_update.js';
import { updateAllBuyBtnsStatus } from "./text_update.js";
import { checkAndChangeImage } from "./text_update.js";

document.addEventListener('DOMContentLoaded', function () {
    const reset_btn = document.getElementById("reset_btn");

    
    reset_btn.addEventListener("click", function () {
        localStorage.clear()

        const text_count_ptts = document.getElementById("text_count_ptts");
        const text_income_ptts = document.getElementById("text_income_ptts");

        let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0
        let income = 1

        text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
        text_income_ptts.textContent = "+" + income.toString() + " 🥔/Клик";
        checkAndChangeImage(count_ptts)
        updateAllBuyBtnsStatus()
        
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

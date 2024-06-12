document.addEventListener('DOMContentLoaded', function () {
    const text_count_ptts = document.getElementById("text_count_ptts");
    var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
    text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";

    const ptt_btn = document.getElementById("ptt_btn");

    ptt_btn.addEventListener("click", function () {
        var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
        count_ptts = count_ptts + 1;
        text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
        localStorage.setItem('count_ptts', parseInt(count_ptts));
        console.log(count_ptts);
    });

    ptt_btn.addEventListener("mousedown", function () {
        ptt_btn.classList.remove("release_ptt_btn");
        ptt_btn.classList.add("press_ptt_btn");
    });

    ptt_btn.addEventListener("mouseup", function () {
        ptt_btn.classList.remove("press_ptt_btn");
        ptt_btn.classList.add("release_ptt_btn");
    });

    ptt_btn.addEventListener("mouseleave", function () {
        ptt_btn.classList.remove("press_ptt_btn");
        ptt_btn.classList.add("release_ptt_btn");
    });

    // Для мобильных устройств
    ptt_btn.addEventListener("touchstart", function () {
        ptt_btn.classList.remove("release_ptt_btn");
        ptt_btn.classList.add("press_ptt_btn");
    });

    ptt_btn.addEventListener("touchend", function () {
        ptt_btn.classList.remove("press_ptt_btn");
        ptt_btn.classList.add("release_ptt_btn");
    });

    ptt_btn.addEventListener("touchcancel", function () {
        ptt_btn.classList.remove("press_ptt_btn");
        ptt_btn.classList.add("release_ptt_btn");
    });
});
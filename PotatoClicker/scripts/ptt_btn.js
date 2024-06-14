document.addEventListener('DOMContentLoaded', function () {
    const text_count_ptts = document.getElementById("text_count_ptts");
    var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
    var income = parseInt(localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0);
    if (income == NaN || income == 0) {
        income = 1;
        localStorage.setItem("income", income)
    };
    text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
    const ptt_btn = document.getElementById("ptt_btn");

    function UpdateIncomePtts() {
        const text_income_ptts = document.getElementById("text_income_ptts");
        let income_ptts = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0;
        text_income_ptts.textContent = "+" + income_ptts.toString() + " 🥔/Клик";
    }
    
    ptt_btn.addEventListener("click", function () {
        var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
        var income = parseInt(localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0);
        if (income == NaN || income == 0) {
            income = 1;
            localStorage.setItem("income", income)
        };
        count_ptts = count_ptts + income;
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

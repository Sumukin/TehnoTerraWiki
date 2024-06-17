document.addEventListener('DOMContentLoaded', function () {
    const text_count_ptts = document.getElementById("text_count_ptts");
    var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
    var income = parseInt(localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0);
    if (isNaN(income) || income === 0) {
        income = 1;
        localStorage.setItem("income", income);
    }
    text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
    const ptt_btn = document.getElementById("ptt_btn");

    function UpdateIncomePtts() {
        const text_income_ptts = document.getElementById("text_income_ptts");
        let income_ptts = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0;
        text_income_ptts.textContent = "+" + income_ptts.toString() + " 🥔/Клик";
    }

    function createFloatingElement(content, x, y) {
        const span = document.createElement('span');
        span.className = 'floatUp';
        span.innerHTML = content;
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        document.body.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 1000);
    }

    ptt_btn.addEventListener("click", function (event) {
        var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
        var income = parseInt(localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0);
        if (isNaN(income) || income === 0) {
            income = 1;
            localStorage.setItem("income", income);
        }
        count_ptts = count_ptts + income;
        checkAndChangeImage(count_ptts)
        text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
        localStorage.setItem('count_ptts', parseInt(count_ptts));

        const x = event.clientX;
        const y = event.clientY;

        createFloatingElement("+" + income + " 🥔", x, y - 10);

        
        console.log(count_ptts);
    });


    function checkAndChangeImage(count) {
        if (count == 1488) {
            ptt_btn.src = "images/webp/pashalko.webp";
        } else {
            let options_array = JSON.parse(localStorage.getItem('options_array')) || {};
            keys = Object.keys(JSON.parse(options_array))
            lastKey=keys[keys.length - 1]
            console.log(lastKey)
            ptt_btn.src = "images/webp/" + lastKey + "_logo.webp";
        }
    }

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

    // For mobile devices
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

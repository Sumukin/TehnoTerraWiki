function updatePttsCount() {
    const text_count_ptts = document.getElementById("text_count_ptts");
    let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0
    text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
}

function updatePttsIncome() {
    const text_income_ptts = document.getElementById("text_income_ptts");
    let income = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0
    text_income_ptts.textContent = "+" + income.toString() + " 🥔/Клик";
}

function updateBuyBtnStatus(card_buy_btn_id) {
    const card_buy_btn = document.getElementById(card_buy_btn_id);
    card_buy_btn.innerHTML = "Куплено"
}

function updateAllBuyBtnsStatus() {
    let options_array = JSON.parse(localStorage.getItem('options_array')) || {};
    for (var keys in options_array) {
        var card_buy_btn = document.getElementById(keys);
        card_buy_btn.innerHTML = "Куплено"
    }
}

export {
    updatePttsCount,
    updatePttsIncome,
    updateBuyBtnStatus,
    updateAllBuyBtnsStatus
}

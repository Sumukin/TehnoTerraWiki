export function updatePttsCount() {
    const text_count_ptts = document.getElementById("text_count_ptts");
    let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0
    text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
}

export function updatePttsIncome() {
    const text_income_ptts = document.getElementById("text_income_ptts");
    let income = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0
    text_income_ptts.textContent = "+" + income.toString() + " 🥔/Клик";
}

export function updateBuyBtnStatus(card_buy_btn_id) {
    const card_buy_btn = document.getElementById(card_buy_btn_id);
    card_buy_btn.innerHTML = "Куплено"
}

export function updateBuyBtnsStatus(card_buy_btn_ids) {
    const card_buy_btn = document.getElementById(card_buy_btn_id);
    card_buy_btn.innerHTML = "Куплено"
}
import {updateAllBuyBtnsStatus} from "./text_update.js";
function UpdateIncomePtts() {
    const text_income_ptts = document.getElementById("text_income_ptts");
    let income_ptts = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0;
    text_income_ptts.textContent = "+" + income_ptts.toString() + " 🥔/Клик";
    updateAllBuyBtnsStatus()
}


document.addEventListener('DOMContentLoaded', function () {
    UpdateIncomePtts();
});

import {updateAllBuyBtnsStatus} from "./text_update.js";
import {updatePttsIncome} from "./text_update.js";
import {updatePttsCount} from "./text_update.js";
    
function UpdateIncomePtts() {
    const text_income_ptts = document.getElementById("text_income_ptts");
    let income_ptts = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0;
    text_income_ptts.textContent = "+" + income_ptts.toString() + " 🥔/Клик";
}


document.addEventListener('DOMContentLoaded', function () {
    updatePttsCount();
    updatePttsIncome();
    checkAndChangeImage(count_ptts)
    updateAllBuyBtnsStatus();
});

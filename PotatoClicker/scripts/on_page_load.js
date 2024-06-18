import {updateAllBuyBtnsStatus} from "./text_update.js";
import {updatePttsIncome} from "./text_update.js";
import {updatePttsCount} from "./text_update.js";
import {checkAndChangeImage} from "./text_update.js"

document.addEventListener('DOMContentLoaded', function () {
    var count_ptts = parseInt(localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0);
    updatePttsCount();
    updatePttsIncome();
    checkAndChangeImage(count_ptts);
    updateAllBuyBtnsStatus();
});

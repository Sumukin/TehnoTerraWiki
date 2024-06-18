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

//Если найду более оптимальное решение, то исправлю, а пока так (в общем и целом тут все ок)
function updateAllBuyBtnsStatus() {
    var options = ["PotatoTeam", "PotatoServer", "PotatoStream", "PotatoGuild", "PotatoDiscord", "PotatoWars", "PotatoWorld"]
    options.forEach((keys) => {
        var card_buy_btn = document.getElementById(keys);
        card_buy_btn.innerHTML = "Купить";
        });
    let options_array = JSON.parse(localStorage.getItem('options_array')) || {};
    for (var keys in options_array) {
        var card_buy_btn = document.getElementById(keys);
        card_buy_btn.innerHTML = "Куплено";
    }
}

function checkAndChangeImage(count) {
    let ptt_btn = document.getElementById('ptt_btn');
    if (!ptt_btn) {
        console.log('Element ptt_btn not found');
        return;
    }
    if (count == 1488) {
        ptt_btn.src = "images/webp/pashalko.webp";
    } else {
        let options_array = JSON.parse(localStorage.getItem('options_array')) || {};
        if (typeof options_array !== 'object' || options_array === null) {
            console.log('options_array is not a valid object');
            return;
        }
        let keys = Object.keys(options_array);
        if (keys.length === 0) {
            ptt_btn.src = "images/webp/PotatoTeam_logo.webp";
            console.log('options_array is empty');
            return;
        }
        let lastKey = keys[keys.length - 1];
        if (!lastKey) {
            console.log('lastKey is invalid');
            return;
        }
        ptt_btn.src = "images/webp/" + lastKey + "_logo.webp";
    }
}

export {
    updatePttsCount,
    updatePttsIncome,
    updateBuyBtnStatus,
    updateAllBuyBtnsStatus, 
    checkAndChangeImage
}

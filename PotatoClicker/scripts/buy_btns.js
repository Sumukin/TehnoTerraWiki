function buy_card() {
    const user_choice = event.target.id;

    //Вот тут можно сделать увеличение цен
    var option_info = {      //цена, зароботок
        "PotatoTeam":    [10, 1],
        "PotatoServer":  [100, 2],
        "PotatoStream":  [500, 3],
        "PotatoGuild":   [1000, 4],
        "PotatoDiscord": [10000, 5],
        "PotatoWars":    [100000, 8],
        "PotatoWorld":   [10000000, 10]
      };

    var option_price = option_info[user_choice][0]
    var option_income = option_info[user_choice][1]

    function updatePotatoCount() {
        const text_count_ptts = document.getElementById("text_count_ptts");
        let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0;
        if (count_ptts >= option_price) {
            count_ptts -= option_price; //Списываем оплату
            let user_income = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0; //Получаем доход человека
            localStorage.setItem("income", user_income + option_income); //Записываем новый доход, с учетом
            option_count = localStorage.getItem(user_choice) ? parseInt(localStorage.getItem(user_choice), 10) : 0
            if (option_count == NaN) {
                option_count = 1
            };
            localStorage.setItem(user_choice, option_count + 1) //Записываем то, что мы купили localStorage 
            text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
            localStorage.setItem('count_ptts', count_ptts);
            console.log(user_choice, count_ptts);
        }
    }

    // PotatoWorld.addEventListener("mousedown", updatePotatoCount());
    PotatoWorld.addEventListener("touchstart", updatePotatoCount());
};

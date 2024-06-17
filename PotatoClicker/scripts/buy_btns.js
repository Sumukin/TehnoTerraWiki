import { updateBuyBtnStatus } from "./text_update";

function buy_card() {
    const user_choice = event.target.id;

    //Вот тут можно сделать увеличение цен
    var option_info = {      //цена, заработок
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

    function UpdateIncomePtts() {
        const text_income_ptts = document.getElementById("text_income_ptts");
        let income_ptts = localStorage.getItem('income') ? parseInt(localStorage.getItem('income'), 10) : 0;
        text_income_ptts.textContent = "+" + income_ptts.toString() + " 🥔/Клик";

    }


    function rewriteChosenOptions(user_choice) {
        let options_array = JSON.parse(localStorage.getItem('options_array')) || {}; //Получаем все наши покупки из LocalStorage
        if (!options_array[user_choice]) {
            options_array[user_choice] = 0;
          }
        options_array[user_choice] = options_array[user_choice] + 1;
        localStorage.setItem('options_array', JSON.stringify(options_array)); //Записываем то, что мы купили localStorage 
        // console.log(options_array, options_array[user_choice])
        let user_income = 1 //Получаем доход пользователя, расчитывая
        for (var keys in options_array) { //Проходимся по всем купленным опциям и расчитываем доход
            user_income = user_income + options_array[keys] * option_info[keys][1]
        }
        localStorage.setItem("income", user_income); //Записываем новый доход, с учетом всех купленных опций
    }

    function updatePotatoCount() {
        const text_count_ptts = document.getElementById("text_count_ptts");
        let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0;
        if (count_ptts >= option_price) { //Проверяем, хватает ли у пользователя денег для покупки
            let options_array = JSON.parse(localStorage.getItem('options_array')) || {};
            if (options_array[user_choice] = 0 || !options_array[user_choice]) {
                count_ptts -= option_price; //Списываем оплату

                rewriteChosenOptions(user_choice) //Записываем то, что мы купили и перерасчитывваем доход пользователя
    
                text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔"; //Переписываем текст под текущий баланс
                localStorage.setItem('count_ptts', count_ptts);
    
                UpdateIncomePtts()
                updateBuyBtnStatus(user_choice)
            }
        }
    }

    // PotatoWorld.addEventListener("mousedown", updatePotatoCount());
    PotatoWorld.addEventListener("touchstart", updatePotatoCount());
};

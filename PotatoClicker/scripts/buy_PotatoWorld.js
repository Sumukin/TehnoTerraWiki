document.addEventListener('DOMContentLoaded', function () {
    const text_count_potatos = document.getElementById("text_count_potatos");
    

    text_count_potatos.textContent = count_potatos; // Обновление значения при загрузке страницы

    const PotatoWorld = document.getElementById("buy_pttworld");

    PotatoWorld.addEventListener("mousedown" || "touchstart", function () {
        var count_potatos = localStorage.getItem('count_potatos') ? parseInt(localStorage.getItem('count_potatos'), 10) : 0; // Инициализация переменной
        count_potatos = count_potatos - 10;
        text_count_potatos.textContent = count_potatos;
        localStorage.setItem('count_potatos', count_potatos);
        console.log(count_potatos);
    });
});
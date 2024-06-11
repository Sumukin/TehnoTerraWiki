// document.addEventListener('DOMContentLoaded', function () {
//     const text_count_potatos = document.getElementById("text_count_potatos");
//     var count_potatos = localStorage.getItem('count_potatos') ? parseInt(localStorage.getItem('count_potatos'), 10) : 0; // Инициализация переменной

//     text_count_potatos.textContent = count_potatos; // Обновление значения при загрузке страницы

//     const mainButton = document.getElementById("MainButton");

//     mainButton.addEventListener("click", function () {        
//         count_potatos = count_potatos + 1;
//         text_count_potatos.textContent = count_potatos;
//         localStorage.setItem('count_potatos', count_potatos);
//         console.log(count_potatos);
//     });

//     mainButton.addEventListener("mousedown", function () {
//         mainButton.classList.remove("release_main_button");
//         mainButton.classList.add("press_main_button");
//     });

//     mainButton.addEventListener("mouseup", function () {
//         mainButton.classList.remove("press_main_button");
//         mainButton.classList.add("release_main_button");
//     });

//     mainButton.addEventListener("mouseleave", function () {
//         mainButton.classList.remove("press_main_button");
//         mainButton.classList.add("release_main_button");
//     });

//     // Для мобильных устройств
//     mainButton.addEventListener("touchstart", function () {
//         mainButton.classList.remove("release_main_button");
//         mainButton.classList.add("press_main_button");
//     });

//     mainButton.addEventListener("touchend", function () {
//         mainButton.classList.remove("press_main_button");
//         mainButton.classList.add("release_main_button");
//     });

//     mainButton.addEventListener("touchcancel", function () {
//         mainButton.classList.remove("press_main_button");
//         mainButton.classList.add("release_main_button");
//     });
// });

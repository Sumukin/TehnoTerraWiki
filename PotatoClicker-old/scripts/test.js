document.addEventListener('DOMContentLoaded', function () { 
    const text_count_potatos = document.getElementById("text_count_potatos"); 
    var count_potatos = 0; 
    const mainButton = document.getElementById("MainButton"); 
 
    mainButton.addEventListener("click", function () { 
        var count_potatos = localStorage.getItem('count_potatos'); 
        count_potatos = parseInt(count_potatos, 10); // Преобразование строки в число
        count_potatos = count_potatos + 1; 
        text_count_potatos.textContent = count_potatos; 
        localStorage.setItem('count_potatos', count_potatos); 
        console.log(count_potatos);
    });
});

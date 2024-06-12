document.addEventListener('DOMContentLoaded', function () {
    const PotatoWorld = document.getElementById("PotatoTeam");

    function updatePotatoCount() {
        const text_count_ptts = document.getElementById("text_count_ptts");
        let count_ptts = localStorage.getItem('count_ptts') ? parseInt(localStorage.getItem('count_ptts'), 10) : 0;
        if (count_ptts >= 10) {
            count_ptts -= 10;
            text_count_ptts.textContent = "🥔 " + count_ptts.toString() + " 🥔";
            localStorage.setItem('count_ptts', count_ptts);
            console.log(count_ptts);
        }
    }

    PotatoWorld.addEventListener("mousedown", updatePotatoCount);
    PotatoWorld.addEventListener("touchstart", updatePotatoCount);
});

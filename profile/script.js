document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.footer-item');

    const favoritesFooter = document.getElementById("Favorites");
    const catalogFooter = document.getElementById("wallet");

    catalogFooter.classList.add('active');
    catalogFooter.classList.remove('inactive');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            buttons.forEach(function (btn) {
                btn.classList.remove('active');
                btn.classList.add('inactive');
            });
            button.classList.add('active');
            button.classList.remove('inactive');
        });
    });
    
    const searchInput = document.getElementById("station-search");

    searchInput.addEventListener("focus", function () {
        if (searchInput.placeholder === "Artists, album or track name...") {
            searchInput.placeholder = "";
        }
    });

    searchInput.addEventListener("blur", function () {
        if (searchInput.value === "") {
            searchInput.placeholder = "Artists, album or track name...";
        }
    });
});

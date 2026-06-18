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

    const artistsBtn = document.getElementById("all-btn");
    const favBtn = document.getElementById("fav-btn");

    const allStations = document.getElementById("all-stations");
    const favStations = document.getElementById("fav-stations");

    artistsBtn.addEventListener("click", function () {
        artistsBtn.classList.add("active");
        artistsBtn.classList.remove("inactive");

        favBtn.classList.add("inactive");
        favBtn.classList.remove("active");

        allStations.classList.remove("hidden");
        favStations.classList.add("hidden");

        catalogFooter.classList.add("active");
        catalogFooter.classList.remove("inactive");
        favoritesFooter.classList.remove("active");
        favoritesFooter.classList.add("inactive");
    });

    favBtn.addEventListener("click", function () {
        favBtn.classList.add("active");
        favBtn.classList.remove("inactive");

        artistsBtn.classList.add("inactive");
        artistsBtn.classList.remove("active");

        favStations.classList.remove("hidden");
        allStations.classList.add("hidden");

        favoritesFooter.classList.add("active");
        favoritesFooter.classList.remove("inactive");
        catalogFooter.classList.remove("active");
        catalogFooter.classList.add("inactive");
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

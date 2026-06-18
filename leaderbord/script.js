document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.footer-item');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
});

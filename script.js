document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {

        menuButton.addEventListener("click", () => {

            mainNav.classList.toggle("open");

        });

    }


    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");

    if (checkin && checkout) {

        const today = new Date()
            .toISOString()
            .split("T")[0];

        checkin.min = today;

        checkin.addEventListener("change", () => {

            checkout.min = checkin.value;

            if (checkout.value <= checkin.value) {
                checkout.value = "";
            }

        });

    }

});

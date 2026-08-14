/* =========================================
   Habarana Lake Breeze Cabana
   Main JavaScript
========================================= */


/* HEADER SCROLL */

const siteHeader = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }

});


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    const open = mobileMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
    );

    document.body.classList.toggle(
        "menu-open",
        open
    );

});


/* CLOSE MOBILE MENU AFTER CLICK */

mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    });

});


/* =========================================
   LANGUAGE SYSTEM
========================================= */

let currentLanguage =
    localStorage.getItem("siteLanguage") || "en";

const languageSwitch =
    document.getElementById("languageSwitch");

function updateLanguage() {

    document.documentElement.lang =
        currentLanguage === "si" ? "si" : "en";


    document.querySelectorAll("[data-en]").forEach(element => {

        const translation =
            element.getAttribute(
                currentLanguage === "si"
                    ? "data-si"
                    : "data-en"
            );

        if (translation) {

            if (
                element.tagName === "INPUT" ||
                element.tagName === "TEXTAREA"
            ) {

                element.placeholder = translation;

            } else if (element.tagName === "OPTION") {

                element.textContent = translation;

            } else {

                element.textContent = translation;

            }

        }

    });


    const active =
        languageSwitch.querySelector(".active-language");

    if (active) {

        active.textContent =
            currentLanguage === "si"
                ? "සිංහල"
                : "EN";

    }

}


languageSwitch.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "en"
            ? "si"
            : "en";

    localStorage.setItem(
        "siteLanguage",
        currentLanguage
    );

    updateLanguage();

});


updateLanguage();


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


document.querySelectorAll(".gallery-item")
    .forEach(item => {

        item.addEventListener("click", () => {

            const image =
                item.getAttribute("data-image");

            const alt =
                item.querySelector("img")?.alt || "";

            lightboxImage.src = image;
            lightboxImage.alt = alt;

            lightbox.classList.add("open");

            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

        });

    });


function closeLightbox() {

    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    }
);


/* =========================================
   WHATSAPP ENQUIRY
========================================= */

const enquiryForm =
    document.getElementById("enquiryForm");

enquiryForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const country =
            document.getElementById("country").value.trim();

        const checkin =
            document.getElementById("checkin").value;

        const checkout =
            document.getElementById("checkout").value;

        const guests =
            document.getElementById("guests").value;

        const room =
            document.getElementById("room").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name) {

            document.getElementById("name").focus();

            return;

        }


        const enquiry =

`Hello Habarana Lake Breeze Cabana,

I would like to enquire about staying at the property.

Name: ${name}
Country: ${country || "Not specified"}
Check-in: ${checkin || "Not specified"}
Check-out: ${checkout || "Not specified"}
Guests: ${guests || "Not specified"}
Preferred accommodation: ${room || "Not specified"}

Message:
${message || "No additional message."}

Please confirm availability and the available options.

Thank you.`;


        const whatsappURL =
            "https://wa.me/94764806045?text=" +
            encodeURIComponent(enquiry);


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }
);


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});

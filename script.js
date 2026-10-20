/* =========================================
   CG WEB ATELIER
   HOMEPAGE NAVIGATION
========================================= */


document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.querySelector(".nav-menu");


    /* =====================================
       MOBILE MENU
    ===================================== */

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        if (navMenu.classList.contains("show")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });


    /* =====================================
       CLOSE MOBILE MENU
    ===================================== */

    document
        .querySelectorAll(".nav-link, .contact-button")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("show");

                menuButton.textContent = "☰";

            });

        });

});


/* =========================================
   SHOW HOMEPAGE
========================================= */

function showHome(event) {

    if (event) {
        event.preventDefault();
    }

    const homePage =
        document.getElementById("homePage");

    homePage.style.display = "block";


    /* REMOVE ACTIVE FROM OTHER MENU */

    document
        .querySelectorAll(".nav-link")
        .forEach(function (link) {

            link.classList.remove("active");

        });


    /* MAKE HOME ACTIVE */

    const homeLink =
        document.querySelector(
            '.nav-link[onclick*="showHome"]'
        );

    if (homeLink) {

        homeLink.classList.add("active");

    }

}


/* =========================================
   OTHER PAGES — TEMPORARILY HIDDEN
========================================= */

function comingSoon(event, pageName) {

    if (event) {
        event.preventDefault();
    }

    alert(
        pageName +
        " page will be added next."
    );

}
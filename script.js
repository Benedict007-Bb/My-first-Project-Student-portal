// ==========================================
// ROYAL STITCH - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // 1. SMOOTH SCROLL FOR NAV LINKS
    // ======================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // ======================================
    // 2. EXPLORE COLLECTION BUTTON
    // ======================================

    const exploreBtn = document.querySelector(".hero button");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            const productsSection = document.querySelector("#featured");

            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // ======================================
    // 3. PRODUCT HOVER EFFECT
    // ======================================

    const products = document.querySelectorAll(".product-card");

    products.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });


    // ======================================
    // 4. SCROLL ANIMATION EFFECT
    // ======================================

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease";
            }
        });
    });


    // ======================================
    // 5. SIMPLE SLIDESHOW (OPTIONAL)
    // ======================================

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");

        if (slides.length > 0) {
            slides[index].style.display = "block";
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(nextSlide, 4000);
    }


    // ======================================
    // 6. CONTACT FORM VALIDATION (IF EXISTS)
    // ======================================

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (valid) {
                alert("Thank you for contacting Royal Stitch 👑");
                form.reset();
            }
        });
    }

});
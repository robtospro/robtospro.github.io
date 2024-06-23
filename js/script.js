document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });


    const navbar = document.querySelector(".navbar");
    const mobile_navbar = document.querySelector(".mobile-nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
            mobile_navbar.classList.add("scrolled");

        } else {
            navbar.classList.remove("scrolled");
            mobile_navbar.classList.remove("scrolled");
        }
    });


    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    // Toggle mobile navigation
    hamburger.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Close mobile navigation when clicking outside
    document.addEventListener('click', function () {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });

    // Close mobile navigation when resizing the window
    window.addEventListener('resize', function () {
        if (window.innerWidth > 667) {
            mobileNav.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });

});

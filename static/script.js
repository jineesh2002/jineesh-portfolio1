const sections = document.querySelectorAll(
    ".about-section, .skills-section, .experience-section, .projects-section, .contact-section"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach((section) => {

    observer.observe(section);

});



/* =====================================
   EXPERIENCE CARD ANIMATION
===================================== */

const experienceItems = document.querySelectorAll(
    ".experience-animate"
);


const experienceObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 200);

            }

        });

    },

    {
        threshold: 0.2
    }

);


experienceItems.forEach((item) => {

    experienceObserver.observe(item);

});
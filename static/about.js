document.addEventListener("DOMContentLoaded", function () {

    const skillSection = document.querySelector(
        ".skill-progress-section"
    );

    const progressBars = document.querySelectorAll(
        ".progress-fill"
    );

    const numbers = document.querySelectorAll(
        ".skill-number"
    );

    let started = false;


    function animateSkills() {

        if (started) return;

        started = true;


        /* PROGRESS BAR */

        progressBars.forEach(function (bar) {

            const progress = bar.getAttribute(
                "data-progress"
            );

            bar.style.width = progress + "%";

        });


        /* NUMBER COUNT */

        numbers.forEach(function (number) {

            const target = parseInt(
                number.getAttribute(
                    "data-target"
                )
            );

            let count = 0;

            const speed = 20;

            const increment =
                Math.ceil(target / 50);


            const counter = setInterval(function () {

                count += increment;


                if (count >= target) {

                    count = target;

                    clearInterval(counter);

                }


                number.textContent =
                    count + "%";

            }, speed);

        });

    }


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateSkills();

                    }

                });

            },

            {
                threshold: 0.4
            }

        );


    observer.observe(skillSection);

});
// ================= BRANCH COUNTER ANIMATION =================

const branchCounter = document.querySelector(".branch-counter");

if (branchCounter) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const target = parseInt(
                    branchCounter.getAttribute("data-target")
                );

                let count = 0;

                const updateCounter = () => {

                    if (count < target) {

                        count++;

                        branchCounter.textContent = count;

                        setTimeout(updateCounter, 150);

                    }

                };

                updateCounter();

                // Run animation only one time
                observer.unobserve(branchCounter);

            }

        });

    }, {
        threshold: 0.5
    });

    observer.observe(branchCounter);

}
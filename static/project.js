/* ===============================
   SCROLL TOP BUTTON
================================ */

const scrollTopButton =
    document.getElementById("scrollTop");


if (scrollTopButton) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                scrollTopButton.classList.add(
                    "show"
                );

            }

            else {

                scrollTopButton.classList.remove(
                    "show"
                );

            }

        }
    );


    /* ===============================
       SCROLL TO TOP
    ================================ */

    scrollTopButton.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ===============================
   PROJECT CARD MOUSE EFFECT
================================ */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    30;


                const rotateY =
                    (centerX - x) /
                    30;


                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    `;

            }
        );

    }
);


/* ===============================
   PROJECT CARD SCROLL ANIMATION
================================ */

const animatedCards =
    document.querySelectorAll(
        ".project-card, .skill-box, .stat-card"
    );


const cardObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        cardObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


animatedCards.forEach(
    function (card) {

        cardObserver.observe(
            card
        );

    }
);


/* ===============================
   STAT COUNTING ANIMATION
================================ */

const counters =
    document.querySelectorAll(
        ".counter"
    );


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        const counter =
                            entry.target;


                        const target =
                            parseInt(
                                counter.dataset.target
                            );


                        const suffix =
                            counter.dataset.suffix ||
                            "";


                        const duration =
                            2000;


                        const startTime =
                            performance.now();


                        function updateCounter(
                            currentTime
                        ) {

                            const elapsed =
                                currentTime -
                                startTime;


                            const progress =
                                Math.min(
                                    elapsed /
                                    duration,
                                    1
                                );


                            const currentValue =
                                Math.floor(
                                    progress *
                                    target
                                );


                            counter.textContent =
                                currentValue +
                                suffix;


                            if (
                                progress < 1
                            ) {

                                requestAnimationFrame(
                                    updateCounter
                                );

                            }

                            else {

                                counter.textContent =
                                    target +
                                    suffix;

                            }

                        }


                        requestAnimationFrame(
                            updateCounter
                        );


                        /* Stop repeating animation */

                        counterObserver.unobserve(
                            counter
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(
    function (counter) {

        counterObserver.observe(
            counter
        );

    }
);
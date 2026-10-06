$(document).ready(function () {

    // ==========================================
    // 1. PAGE FADE-IN
    // ==========================================

    $("body").hide().fadeIn(900);


    // ==========================================
    // 2. TYPING ANIMATION
    // ==========================================

    let words = [
        "Web Developer",
        "Creative Designer",
        "Programmer",
        "Tech Enthusiast"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;


    function typeEffect() {

        let currentWord = words[wordIndex];

        if (!deleting) {

            $("#typing").text(
                currentWord.substring(0, letterIndex + 1)
            );

            letterIndex++;

            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;
            }

        } else {

            $("#typing").text(
                currentWord.substring(0, letterIndex - 1)
            );

            letterIndex--;

            if (letterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex === words.length) {
                    wordIndex = 0;
                }

            }

        }

        let speed = deleting ? 60 : 100;

        setTimeout(typeEffect, speed);
    }


    typeEffect();


    // ==========================================
    // 3. DARK / LIGHT MODE
    // ==========================================

    $("#themeBtn").click(function () {

        $("body").toggleClass("dark");

        if ($("body").hasClass("dark")) {

            $(this).text("☀️");

            localStorage.setItem("theme", "dark");

        } else {

            $(this).text("🌙");

            localStorage.setItem("theme", "light");

        }

    });


    // Remember theme after refresh

    if (localStorage.getItem("theme") === "dark") {

        $("body").addClass("dark");

        $("#themeBtn").text("☀️");

    }


    // ==========================================
    // 4. SKILL BAR ANIMATION
    // ==========================================

    function animateSkills() {

        $(".skill-fill").each(function () {

            let width = $(this).attr("data-width");

            $(this).animate(
                { width: width },
                1200
            );

        });

    }


    animateSkills();


    // ==========================================
    // 5. HOVER EFFECT ON PROJECTS
    // ==========================================

    $(".project-card").hover(

        function () {

            $(this).css(
                "transform",
                "translateY(-12px)"
            );

        },

        function () {

            $(this).css(
                "transform",
                "translateY(0)"
            );

        }

    );


    // ==========================================
    // 6. HOBBY CLICK
    // ==========================================

    $(".hobbies button").click(function () {

        let hobby = $(this).text();

        alert(
            "You selected: " + hobby
        );

    });


    // ==========================================
    // 7. SMOOTH SCROLL
    // ==========================================

    $('a[href^="#"]').click(function (event) {

        event.preventDefault();

        let target = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(target).offset().top - 70

        }, 700);

    });


    // ==========================================
    // 8. CONSOLE MESSAGE
    // ==========================================

    console.log(
        "✨ Welcome to Keerti's Portfolio Website!"
    );

    console.log(
        "Website loaded successfully."
    );

});
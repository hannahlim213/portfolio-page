$(document).ready(function () {
    // $(".dropdown-content").hide();

    $("#view-more-btn").on("click", function () {
        $(this).hide();
    })

    var fadeInTitle = function () {
        

        window.setTimeout(function () {
           
            $("#q1").addClass("fadeInLeft");
            window.setTimeout(function () {
                $("#q2").addClass("fadeInLeft");
                window.setTimeout(function () {
                    $("#q3").addClass("fadeInLeft");
                }, 3000)
            }, 2000)
        }, 1000)
    }

    fadeInTitle();

})


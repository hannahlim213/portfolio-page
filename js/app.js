$(document).ready(function () {

    var textArr = [
        "full-stack developer",
        "snowboarder",
        "scuba diver",
        "soccer player",
        "touch rugby player"
    ]

    // loop through textArr
    for (var i = 0; i < textArr.length; i++) {

        function introText() {
            setInterval(function () {
                $("#intro-text").text(textArr[i]), 3000
            })
        }


    }


    $("#view-more-btn").on("click", function () {
        $(this).hide();
    })

    // introTextArr = ["web-developer.", "soccer player.", "touch rugby player.", "sweet potato fan."];

    // for(var i = 0; i<introTextArr.length; i++) {
    //     introText(introTextArr[i])
    // }
    var introText = function () {
        window.setTimeout(function () {
            $("#intro-text").text("web-developer.");
            // $("#intro-text").append("<span><img id='comp-emoji' height=45px src='../assets/images/emojis/comp.png'></span>")
            window.setTimeout(function () {
                $("#intro-text").text("soccer player.");
                window.setTimeout(function () {
                    $("#intro-text").text("touch rugby player.");
                    window.setTimeout(function () {
                        $("#intro-text").text("sweet potato fan.");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 2000)
    }
    introText()

    
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
    // window.setTimeout(function () {
    //     $("#intro-text").text("touch rugby player.");
    //     window.setTimeout(function () {
    //         $("#intro-text").text("sweet potato fan.");
    //     }, 2000)
    // }, 0)

})


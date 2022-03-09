var x = document.getElementById("btn");
x.addEventListener("click",function(){
    window.scrollTo({
        top:window.innerHeight,
        left:0,
        behavior: 'smooth',
    })
})

$(document).ready(() => {
    let x = 0;
    $(".fa-bars").click(() => { 
        $("#list").slideToggle(500);
    })
    $(window).on("resize", function (event) {
        
        if ($(window).width() > 0) {
            x = 0;
            $(".fa-bars").css("transform", `rotate(0deg)`);
        }
        if ($(window).width() > 730) {
            $("#list").css("display", "flex");
            $(".fa-bars").css("transform", `rotate(0deg)`);
        }
        if ($(window).width() <= 730) {
            $("#list").css("display", "none");
        }
    });
    
    $(".fa-bars").click(() => {
        x = x + 90;
        $(".fa-bars").css("transform", `rotate(${x}deg)`);
    })
})

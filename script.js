$("nav").find("a").click(function(e) {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


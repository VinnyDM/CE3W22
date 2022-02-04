// WHEN LOADING IS FINISHED, TRIGGER "STARTT"
$(window).on("load", start);

function start(){

    $("ul.nav a:first").click();
    
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    var url = $(this).attr("href");
    // EXTRACT THE CONTENT FROM "HREF" AND BRING IT TO YOUR WEBSITE
    $("#content").load(url);
    $("ul.nav a").removeClass("active");
    $(this).addClass("active");
    
}


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
var navbar = document.getElementById("navbar");
function scrollFunction() {
    if (document.documentElement.scrollTop > 10) {
        navbar.style.padding = "1px 10px";
        navbar.classList.add("sticky");
        navbar.style.height = "60px"
    } else {
        navbar.style.padding = "15px 10px";
        navbar.style.height = "90px"
        navbar.classList.remove("sticky");
    }
}


$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".wrapper").toggleClass("collapse");
    });
});


window.onload = navbar_dropdown()
function navbar_dropdown() {
    var dropitem1 = $("#dropitem1")
    var ddm1 = $("#ddm1")
    // wakt nokherjou mel dropdown catégories fel navbar, la liste d'éléments tetnaha
    dropitem1.on("mouseleave", function () {
        ddm1.removeClass("show");
    })

    // wakt nodkhlou lel dropdown catégories fel navbar, la liste d'éléments todhhor
    dropitem1.on("mouseover", function () {
        ddm1.addClass("show");
    })

    // wakt nokherjou mel dropdown mini-jeux fel navbar, la liste d'éléments tetnaha
    var dropitem2 = $("#dropitem2")
    var ddm2 = $("#ddm2")
    dropitem2.on("mouseleave", function () {
        ddm2.removeClass("show");
    })

    // wakt nodkhlou lel dropdown mini-jeux fel navbar, la liste d'éléments todhhor
    dropitem2.on("mouseover", function () {
        ddm2.addClass("show");
    })
}
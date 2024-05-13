// SLIDER 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


// MOBILE HEADER
$("._menu_header_mob_btn i").click(function() {
    $("._menu_head_mob").addClass("_menu_head_mob_open");
});
$("._menu_head_mob_close").click(function() {
    $("._menu_head_mob").removeClass("_menu_head_mob_open");
});


// MENU
$("._menu_mob_btn i").click(function() {
    $("._menu_mob").addClass("_menu_mob_open");
});
$("#_menu_head_mob_close2").click(function() {
    $("._menu_mob").removeClass("_menu_mob_open");
});

$("._icon_rmv").click(function() {
    $("._mbl_menu_main").removeClass("_active");
    $("html").removeClass("modal-open");
    $("._all_toggles").removeClass("_active");
    $("._icon_rmv").removeClass("_active");
    $("._icon_click").removeClass("_active");
});

   



// function rototeCube (e){
//     var cube = document.getElementsByClassName("image");

//     var x = e.elientX - window.innerWidth / 2;
//     var y = e.elientX - window.innerHeight / 2;
//     var q = 0.15;
//     var i;

//     x = x * q * 1.25;
//     y = -y * q * 1.25;

//     for (i = 0; i< cube.length; i++){
//         cube[i].style.transform = "rotateY(" + x +" deg) rotateX("+ y +"deg)";
//     }
// }
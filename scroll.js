
$('#home').addClass("active");

$("#home").click(function() {
    $('html, body').animate({
        scrollTop:        $("#one").offset().top-666
    }, 1000);
    return false;
});

$("#about").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#two").offset().top-1012
    }, 1000);
    return false;
});

$("#next").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#three").offset().top
    }, 1000);
    return false;
});

$("#hr").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#four").offset().top-100
    }, 1000);
    return false;
});

$("#gallery").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#five").offset().top
    }, 1000);
    return false;
});

$("#media").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#six").offset().top
    }, 1000);
    return false;
});

$("#music").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#seven").offset().top
    }, 1000);
    return false;
});

$("#contact").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#eight").offset().top
    }, 1000);
    return false;
});


// $('#two').waypoint(function() {
      
//     $(".container ul li").children().removeClass("active");
//     $("#sec-2").addClass("active");
    
//   }, { offset: 101 });
  
  
//   $('#three').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-3").addClass("active");
//   }, { offset: 101 });
  
//   $('#four').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-4").addClass("active");
//   }, { offset: 101 });
  
//   $('#one').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-1").addClass("active");
//   }, { offset: 0 });

// TEST
// $(document).ready(function (){
//     $('.home-name-traits-1').click(function(){
//         $('.home-name-traits-1').text(`It's not magic, it's jQuery`).css('color', 'Green')
//     })
// })
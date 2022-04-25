$(document).ready(function(){
    $('.examplesContainer').slick({
        arrows:true,
        dots:false,
        slidesToShow:4,
        slidesToScroll:4
    });
    $('.completedExamples').slick({
        arrows:true,
        dots:false,
        slidesToShow:9,
        slidesToScroll:12,
        rows:3
    })
});

$(function(){
    $("#phone").mask("9(999)999-99-99");
});

function targetPortrait(){
    document.getElementById("portrait").checked = true;
 
};

function targetPicture(){
    document.getElementById("picture").checked = true;
};
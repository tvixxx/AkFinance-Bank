$(document).ready(function(){
    $('div.helper-pass').addClass('helper-pass-hide');
});

function showHelper (){
    $('.restore').mouseover(function(){
       $('.helper-pass').show(500).removeClass('helper-pass-hide');
    });
}
function hideHelper (){
    $('.restore').mouseout(function(){
        $('.helper-pass').hide(500).addClass('helper-pass-hide');
    });
}

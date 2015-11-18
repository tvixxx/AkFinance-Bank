$(document).ready(function(){
    var helperLink = $('a.restore');
    var helperBlock = $('.helper-pass').addClass('hide');
    
        helperLink.on('mouseover', function(){
            helperBlock.removeClass('hide').addClass('show');
        });
        helperLink.on('mouseleave', function(){
           helperBlock.removeClass('show').addClass('hide');
        });
});

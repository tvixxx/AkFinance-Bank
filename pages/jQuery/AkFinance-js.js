/* Fourth method with hover animation*/
$(document).ready(function(){
    var helperLink = $('#helperLink');
    var helperBlock = $('#helper-pass').addClass('hide');

    //animation
    helperLink.hover(function(){
        // fadeIn
        helperBlock.animate ({
            'opacity' : 'show'
                })
        }, //fadeOut
        function(){
        helperBlock.animate({
            'opacity' : 'hide'
        });
    });
});


/* First method */
$(document).ready(function(){
    var helperLink = $('#helperLink');
    var helperBlock = $('.helper-pass').addClass('hide');

        helperLink.on('mouseover', function(){
            helperBlock.removeClass('hide').addClass('show');
        });
        helperLink.on('mouseleave', function(){
           helperBlock.removeClass('show').addClass('hide');
        });
});

/* Second method */
$(document).ready(function(){
    var helperLink = $('a');
        helperLink.find('#helperLink');
    var helperBlock = $('.helper-pass')
                     .addClass('hide');

        helperLink.on('mouseover', function(){
            helperBlock.removeClass('hide').addClass('show');
        });
        helperLink.on('mouseleave', function(){
           helperBlock.removeClass('show').addClass('hide');
        });
});

/* Third method */
$(document).ready(function(){
    var helperLink = $('#helperLink');
    var helperBlock = $('#helper-pass').addClass('hide');

        helperLink.mouseenter(function(){
            helperBlock.removeClass('hide').addClass('show');
        });
        helperLink.mouseleave(function(){
           helperBlock.removeClass('show').addClass('hide');
        });
});

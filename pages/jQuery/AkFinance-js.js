    /* login page */
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

    /* registration page */
/* First method */    
$(document).ready(function(){
    var helperLawLabel = $('#law-label');
    var helperLawBlock = $('#law-form-helper').addClass('hide');

    helperLawLabel.on('mouseover', function(){
       helperLawBlock.removeClass('hide').addClass('show');
    });
    helperLawLabel.on('mouseleave', function(){
        helperLawBlock.removeClass('show').addClass('hide');
    });
});

/* Second Method */
/* Method second registration page */
var helperLawLabel = $('#law-label');
var helperLawBlock = $('#law-form-helper').addClass('hide');

var helperCreditLabel = $('#credit-label');
var helperCreditBlock = $('#credit-form-helper').addClass('hide');

    /* law-block animation */
    helperLawLabel.hover(function(){
        // fadeIn
        helperLawBlock.animate ({
            'opacity' : 'show'
        },300)
    }, //fadeOut
    function(){
        helperLawBlock.animate({
            'opacity' : 'hide'
        },300);
    });
    
    /* credit-block animation */
    helperCreditLabel.hover(function(){
        // fadeIn
        helperCreditBlock.animate ({
            'opacity' : 'show'
        },300)
    }, //fadeOut
    function(){
        helperCreditBlock.animate({
            'opacity' : 'hide'
        },300);
    });

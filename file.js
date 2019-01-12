// Navbar
( function( $ ) {
    $( document ).ready(function() {
    if(window.innerWidth > 560) {
        $('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
        $('#cssmenu, #bg-one, #bg-two, #bg-three, #bg-four').css('display', 'block');
        $('.containerNav').css('display', 'none')
    } else if(window.innerWidth < 560){
        $('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
        $('#cssmenu').css('display', 'none');       
        $('.containerNav').css('display', 'inline-block');
    }
        
    });
    } )( jQuery );

    function menuChange(x) {
        x.classList.toggle("change");
        if($('div').hasClass('show') == true) {
            $('#navbarIcon').css('display', 'none');
        } else if($('div').hasClass('show') == false){
            $('#navbarIcon').css('display', 'block');
        }
      }

    $( window ).resize(function() {
        if(window.innerWidth > 560) {
            $('#cssmenu, #bg-one, #bg-two, #bg-three, #bg-four').css('display', 'block');
            $('.containerNav').css('display', 'none');
            if($('#cssmenu').length == 0)
            $('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
            $('#navbarIcon').css('display', 'none');
        } else if(window.innerWidth < 560){
            $('#cssmenu, #bg-one, #bg-two, #bg-three, #bg-four').css('display', 'none')
            $('.containerNav').css('display', 'inline-block');
            if($('div').hasClass('change')) {
                $('#navbarIcon').css('display', 'block');
            }
        }
    });


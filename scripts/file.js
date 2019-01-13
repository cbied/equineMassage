// Navbar load
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

  // menu #navbarIcon toggle
    function menuChange(x) {
        x.classList.toggle("change");
        if($('div').hasClass('show') == true) {
            $('#navbarIcon').css('display', 'none');
        } else if($('div').hasClass('show') == false){
            $('#navbarIcon').css('display', 'block');
        }
      }

    // fixed menu when FAQ collapse is open
    $( '#cNav' ).on('click', function(){
        $('#collapse1, #collapse2, #collapse3').removeClass('show');
        if($('div').hasClass('show') == true) {
            $('#navbarIcon').css('display', 'none');
        } else if($('div').hasClass('show') == false){
            $('#navbarIcon').css('display', 'block');
        }
    });

    // hide menu when a link in menu is clicked
    $('#mobleNav a').on('click', function() {
        $('.navbar-collapse').toggleClass('show')
        $('.navbar-collapse').toggle('.show')
        if($('.containerNav').hasClass('change')) {
            $('.containerNav').removeClass('change')
            $('.containerNav').addClass('collapsed')
            $('.containerNav').attr("aria-expanded","false")
        }
       
      })

    // menu change when resize window
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

   

// Ad smooth scrolling
$('#cssmenu a, #mobleNav a').on('click', function(defultEvent) {
  // Check for a hash value
  if(this.hash !== '') {
    // Prevent defult behavior
    defultEvent.preventDefault();

    // Store hash
    const hash = this.hash;

    // animate smooth scrolling
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      // Add hash to URL after scroll
      window.location.hash = hash;
  });
  }
});
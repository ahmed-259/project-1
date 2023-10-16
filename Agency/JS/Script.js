    // Check If There Is Local Storage Color Option
    let colorOption = localStorage.getItem('change-color');

    if (colorOption !== null) {
        
        document.documentElement.style.setProperty('--main-Color', colorOption);
        
        // Remove Class active From Color Option
        document.querySelectorAll('.change-color li').forEach(element => {
        
       element.classList.remove('active-color'); 
        
       if (element.dataset.color === colorOption) {
           
           element.classList.add('active-color');
           
       }
        
    });
        
    }

    // Fixed-Menu
    $('.gear-icon').on('click', function () {
        
       $(this).parent('.fixed-menu').toggleClass('is-visible');
       $('.fa-gear').toggleClass('fa-spin');
        
       if ($(this).parent('.fixed-menu').hasClass('is-visible'))
       {
           
           $(this).parent('.fixed-menu').animate({left : 0}, 350);
           
           $('.fixed-menu').css('z-index', '100');
           
       } else
       {
           
           $(this).parent('.fixed-menu').animate({left : '-250px'}, 350);
           
           $('.fixed-menu').css('z-index', '4');
        
       }
        
    });


    // Switch Colors
    let colorli = document.querySelectorAll('.change-color li');

    colorli.forEach(color => {
        
        color.addEventListener('click', (e) => {
            
            // Set Color On Root
            document.documentElement.style.setProperty('--main-Color', e.target.dataset.color);
            
            // Set Color At Local Storage
            localStorage.setItem('change-color', e.target.dataset.color);
            
            // Remove Class active From Color Option
            document.querySelectorAll('.change-color li').forEach(element => {
        
            element.classList.remove('active-color');
                
                });
            
            // Add class active
            e.target.classList.add('active-color');
            
        });
        
    });


    // Add Class (on)
    $('.option span').click(function () {
        
       $(this).addClass('on').siblings().removeClass('on');
        
    });

    // navbar fixed
    $(window).on("scroll", function () {
                   
     var scroll = $(document).scrollTop();
    
       if (scroll > 150) {
           
           $(".Navbar").css("background-color","rgba(0, 0, 0, .8)");
           
       } else {
           
           $(".Navbar").css("background-color","");
       }
        
    });


    // Show Nav-links
    $('.fa-bars').click(function () {
        
       $('.Nav-links').slideToggle(400);
        
    });


    // Header Height
    $('.header').height($(window).height());

    // Auto Change Header BackgroundImage
    let header = document.querySelector('.header');
        
    //Array Of Images
    let imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    
    
    setInterval(function () {
        
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        
        header.style.backgroundImage = 'url("Photos/' + imgArray[randomNumber] +'")';
        
    }, 5000);

    // Centerlaize Body Section
    $('.body').css('marginTop', ($(window).height() - $('.body').height()) / 2);


    // Show Links at Bullets
    $('.header-dot li').hover(function () {
        
       $(this).next().fadeIn(200);
        
    }, function () {
        
        $(this).next().fadeOut(200);
        
    });

    // Centerlaize Bullets Section
    $('.header .dots').css('top', ($(window).height() - $('.dots').height()) / 2);


    // Show Bullets
    $('.bullets-on').click(function () {
        
        $('.dots').fadeIn();
        
    });
    

    // Hide Bullets
    $('.bullets-off').click(function () {
        
        $('.dots').fadeOut();
        
    });


    // Smoothly Scroll To Elements
    $('.Navbar li, .dots li').click(function () {
        
       $('html, body').animate({
           
           scrollTop : $('#' + $(this).data('scroll')).offset().top + 1
           
       }, 1000);
        
    });
    
    
    // Sunc Navbar Links With Sections
    $(window).scroll(function () {
        
       $('.block').each(function () {
           
          if($(window).scrollTop() > $(this).offset().top) {
              
              var blockID = $(this).attr('id');
              
              $('.Navbar li').removeClass('active');
              $('.dots li').removeClass('filled');
              
              $('.Navbar li[data-scroll="' + blockID + '"]').addClass('active');
              $('.dots li[data-scroll="' + blockID + '"]').addClass('filled');
              
          }
           
       });
        
    });


    // Put The Image At The Center
    $('.popup').css('paddingTop', ($('.popup').height() - $('.popup-img').height()) / 2);


    // Show Popup
    $('.gallery .img img').click(function () {
        
       $('.popup').fadeIn();
        
       $('.popup-img img').attr('src', $(this).attr('src'));
        
       $('.img-details span').attr('src', $(this).attr('src'));
        
       $('.img-details span').text($(this).attr('alt'));
        
    });

    // Hide Popup
    $('.fa-times').click(function () {
        
       $('.popup').fadeOut();
        
    });


    // Hide Placeholder
    var placeAtrr = '';
    
    $('[placeholder]').focus(function () {
        
        placeAtrr = $(this).attr('placeholder');
        
        $(this).attr('placeholder', '');
        
    }).blur(function () {
        
       $(this).attr('placeholder', placeAtrr);
        
    });

    // wow Plugin
    new WOW().init();








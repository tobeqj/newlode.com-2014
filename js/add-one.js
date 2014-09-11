        
        var revapi;

        jQuery(document).ready(function() {
            App.init();
            App.initCounter();
            App.initParallaxBg();
            OwlCarousel.initOwlCarousel();            

            revapi = jQuery('.fullscreenbanner').revolution({
                delay:15000,
                startwidth:1170,
                startheight:500,
                hideThumbs:10,
                fullWidth:"on",
                fullScreen:"on",
                dottedOverlay:"twoxtwo",
                fullScreenOffsetContainer: "",
            });

            $(".fancybox-btn").fancybox();

            $('.page-scroll').click(function(e){
                if ($('.navbar-collapse').hasClass('in')){
                    $('.navbar-collapse').removeClass('in').addClass('collapse');
                }
            });
        });

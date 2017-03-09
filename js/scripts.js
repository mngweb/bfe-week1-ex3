(function($) {

    $(document).ready(function() {

        var nav = $(".nav-main");


        $(".toggle-menu").on("click", function() {

            var isVisible = nav.is(":visible"),
                navWidth = nav.outerWidth(); 

            $(this).toggleClass('click', !isVisible);


            nav.stop().slideToggle(500).transition({
                //opacity: "toggle",       //nie działa?
                opacity: !isVisible ? 1 : 0,
                left: !isVisible ? 0 : -navWidth
                }, {
                duration: 500,
                //easing: "easeOutBounce",      //nie działa?
                queue: false  
            }); 


        });

    });

})(jQuery);



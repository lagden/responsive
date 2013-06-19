/*
* Doubletake.js 1.1
* A jQuery plugin for responsive images
*
* Copyright 2011, Graham Bird http://www.grahambird.co.uk
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: 28 July 2011
*/
(function($){

    $.fn.doubletake = function(userconfig)
    {   
        // DEFAULT CONFIG
        var config = {
        'breakpoints': [320,480,640,960,1024],
        'pattern': '/slir/w([0-9]+).*',
        'watchresize': false
        };
    
        return this.each(function()
        {      
        
            var $this = $(this); 
          
            // GRAB USER CONFIG
            if (userconfig) { 
                $.extend(config, userconfig);
            }
            
            var go = function()
            {
                var newWidth;
                var elementWidth = $(this).width();
                
                // MAKE SURE BREAKPOINTS ARE IN CORRECT ORDER
                config.breakpoints.sort(function(a,b){return a-b});
                
                // USE SMALLEST BREAKPOINT TO START WITH
                newWidth = config.breakpoints[0];
                
                // LOOP OVER BREAKPOINTS TO WORK OUT WHICH APPLIES BEST
                $.each(config.breakpoints, function(index, value)
                {
                    // IF THE ELEMENT WE'RE INSIDE IS BIGGER THAN THE CURRENT VALUE, INCREASE THE BEST WIDTH AND CONTINUE
                    if (elementWidth >= value)
                    {
                        newWidth = value;
                    }
                    else
                    {
                        // EXIT, WE HAVE THE BIGGEST WE NEED
                        return false;
                    }
                });
                
                // LOOP OVER IMAGES INSIDE THE SELECTED ELEMENT
                $this.find('img').each(function()
                {
                    var r = new RegExp(config.pattern);
                    if (r.test(this.src))
                    {
                        var exec = r.exec(this.src);
                        var originalWidth = exec[1]; 
                        this.src = this.src.replace(originalWidth, newWidth);
                    }
                });
            
            }
            
            // INITIAL PASS
            go();
            
            if (config.watchresize)
            {
                // UPDATE AFTER RESIZE
                $(window).resize(function()
                {
                    if(this.resizeTO) clearTimeout(this.resizeTO);
                    this.resizeTO = setTimeout(function() {
                        $(this).trigger('resizeEnd');
                    }, 500);
                });
                $(window).bind('resizeEnd', function()
                {
                    go();   
                });
            }
        });
    }
})(jQuery);
/*
* Responsive.js 1.0
* A jQuery plugin for responsive images
*
* Copyrigh 2011, Thiago Lagden http://lagden.art.br
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: 30 October 2011
*/
(function( $ ){
    $.extend($.fn,{        
        responsive: function(options)
        {
            var opts, _this, _wins, _width;
            var defaults = {
                medias: {"400":480,"500":528,"600":640,"700":768,"800":896},
                dataDefault: "default",
                debug: false
            };
            
            opts = $.extend(defaults, options);
            _this = this;
            _wins = $(window);
            
            _width = _wins.width();
            _this.swapImage(opts,_this,_width);
            
            _wins.bind('resize',function()
            {
                _this.swapImage(opts,_this,_wins.width());
            });
        },
        swapImage: function(opts,_this,_width)
        {
            var media = _this.getMedia(opts,_width);
            media = (media) ? media : opts.dataDefault;
            if(media)
            {
                _this.each(function(i,el)
                {
                    var c = $(el);
                    var data = c.data(media);
                    if(data != undefined)
                    {
                        if(opts.debug) _this.trace(data);
                        c.attr('src',data);
                    }
                });
            }
        },
        getMedia: function(opts,_width)
        {
            for (var k in opts.medias)
            {
                if(opts.medias[k] >= _width) return k;
            }
            return false;
        },
        trace: function()
        {
            if(typeof(console)!=='undefined'&&console!=null)
            {
                console.log(arguments);
            }
        }
    });
})( jQuery );

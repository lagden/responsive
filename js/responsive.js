(function( $ ){
    $.extend($.fn,{        
        responsive: function(options)
        {
            var opts, _this, _wins, _width;
            var defaults = {
                medias: {"400":480,"500":528,"600":640,"700":768,"800":896}
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
            media = (media) ? media : "default";
            if(media)
            {
                _this.each(function(i,el)
                {
                    var c = $(el);
                    var data = c.data(media);
                    if(data != undefined)
                    {
                        c.attr('src',data)
                        console.log(data,media);
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
        }
    });
})( jQuery );

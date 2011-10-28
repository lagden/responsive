Responsive.js
=============

While [responsive images using css3](http://nicolasgallagher.com/responsive-images-using-css3/) is not implemented, I created a jquery plugin to simulate the same effect.

### Responsive.js usage:

`HTML` 

    <img class="responsive"
      src="data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEHAAIALAAAAAABAAEAAAICVAEAOw=="
      data-600="assets/image600.jpg"
      data-800="assets/image800.jpg"
      data-default="assets/image.jpg"
    alt="imageSample">

`Javascript`

        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/responsive.js"></script>
        <script type="text/javascript" >
            $(document).ready(function()
            {
                $('img.responsive').responsive({
                    medias: {"600":640,"800":896},
                    dataDefault: "default",
                    debug: false
                });
            });
        </script>

### CSS3 usage ( near future - no more Responsive.js ):

`HTML` 

    <img src="assets/image.jpg"
      data-600="assets/image600.jpg"
      data-800="assets/image800.jpg"
    alt="image">

`CSS3`

        @media screen and (min-width:600px){
            img[data-src-600px]{
                content: attr(data-600, url);
            }
        }

        @media screen and (min-width:800px){
            img[data-src-800px]{
                content: attr(data-800, url);
            }
        }

Author
======

**Thiago Lagden**

[Twitter](http://twitter.com/thiagolagden)  
[Github](http://github.com/lagden)
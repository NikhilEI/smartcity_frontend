_linkedin_data_partner_id = "183011";



(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "../snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();



/*document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 170) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
      //  navbar_height = document.querySelector('#navbar_top').offsetHeight;
       // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});  
*/



$(document).ready(function(){

if($('.brands_slider').length)
{
var brandsSlider = $('.brands_slider');

brandsSlider.owlCarousel(
{
loop:true,
autoplay:true,
autoplayTimeout:5000,
nav:false,
dots:false,
//autoWidth:true,
items:8,
margin:42,
responsive:{
0:{
items:2
},
600:{
items:3
},
1000:{
items:5
}
}
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});



/*customer review*/
$(document).ready(function() {

$('.testimonial-home').owlCarousel({
mouseDrag:false,
loop:true,
autoplay:false,
autoplayTimeout:5000,
margin:2,
nav:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:2
}
}
});

$('.owl-prev').click(function() {
$active = $('.owl-item .item.show');
$('.owl-item .item.show').removeClass('show');
$('.owl-item .item').removeClass('next');
$('.owl-item .item').removeClass('prev');
$active.addClass('next');
if($active.is('.first')) {
$('.owl-item .last').addClass('show');
$('.first').addClass('next');
$('.owl-item .last').parent().prev().children('.item').addClass('prev');
}
else {
$active.parent().prev().children('.item').addClass('show');
if($active.parent().prev().children('.item').is('.first')) {
$('.owl-item .last').addClass('prev');
}
else {
$('.owl-item .show').parent().prev().children('.item').addClass('prev');
}
}
});

$('.owl-next').click(function() {
$active = $('.owl-item .item.show');
$('.owl-item .item.show').removeClass('show');
$('.owl-item .item').removeClass('next');
$('.owl-item .item').removeClass('prev');
$active.addClass('prev');
if($active.is('.last')) {
$('.owl-item .first').addClass('show');
$('.owl-item .first').parent().next().children('.item').addClass('prev');
}
else {
$active.parent().next().children('.item').addClass('show');
if($active.parent().next().children('.item').is('.last')) {
$('.owl-item .first').addClass('next');
}
else {
$('.owl-item .show').parent().next().children('.item').addClass('next');
}
}
});

});
/*customer review*/


/*get-involved start*/

$('#get-involved-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

/*get-involved end*/

/*showcase-products-carousel start*/

$('#showcase-products-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

/*showcase-products-carousel end*/

/*why-participate-carousel start*/

$('#why-participate-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    },
    1100: {
      items: 6
    }
  }
});

/*why-participate-carousel end*/

/*listen-experts-carousel start*/

$('#listen-experts-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

/*listen-experts-carousel end*/


/*home-registration-carousel start*/

$('#home-registration-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
});

/*home-registration-carousel end*/

/*home-huge-success-carousel start*/

$('#home-huge-success-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

/*home-huge-success-carousel end*/




//$('#myLightbox').lightbox(options);

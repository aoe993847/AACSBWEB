

$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay:true,
    autoplaySpeed: 2000,  
    

  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });
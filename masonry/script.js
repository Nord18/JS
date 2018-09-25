var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 20
  }
})

$('.link-group').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$(function() {
  var counter = 0;

  $('.button').click(function() {
    $(this).text('Done')
    $('#underbuttonText').text("Success! Everyone's killed!")
  })

  $('.parallax').scroll(function(e) {
    counter = -($('#group1').offset().top)
    counter = Math.floor(counter)
    $('#pixels').text(counter)
    console.log(counter)
  })

  $('.menubar').scroll(function(e) {
    counter = -($('.menu').offset().top)
    counter = Math.floor(counter)
    $('#.lvl').text(counter)
    console.log(counter)
  });
});

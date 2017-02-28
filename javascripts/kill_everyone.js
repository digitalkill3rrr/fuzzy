$(function() {
  var counter = 0;

  $('.button').click(function() {
    $(this).text('Done')
    $('#underbuttonText').text("Success! Everyone's killed!")
  })

  $('.parallax').scroll(function(e) {
    counter = -($('#group1').offset().top)
    $('#pixels').text(counter)
    console.log(counter)
  });
});

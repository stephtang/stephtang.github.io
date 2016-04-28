$(document).ready(function() {
  function parallax() {
      var scrolled = $(window).scrollTop();
      $('#title-page-content').css('top', -(scrolled * 0.6) + 'px')
  }

  $(window).scroll(function() {
      parallax();
  });

// problem container scroll //

  $('#problem-container1').waypoint(function() {
    $( "#problem-title:hidden:first" ).fadeIn(1500);
  }, {
    offset: '75%'
  });

  $('#problem-container1').waypoint(function() {
    $('#transition-line1').slideDown(2000);
  }, {
    offset: '10%'
  });

  $('#problem-container2').waypoint(function() {
    $('#transition-line2').slideDown(2000);
  }, {
    offset: '60%'
  });

  $('#problem-container2').waypoint(function() {
    $('#transition-line3').slideDown(2000);
  }, {
    offset: '10%'
  });

  $('#temp-container').waypoint(function() {
    $('#transition-line4').slideDown(2000);
  }, {
    offset: '50%'
  });


// causes container scroll //

  $('#causes-container1').waypoint(function() {
    $( "#causes-title:hidden:first" ).fadeIn(1500);
  }, {
    offset: '75%'
  });

  $('#causes-container1').waypoint(function() {
    $('#transition-line5').slideDown(2000);
  }, {
    offset: '10%'
  });

  $('#causes-container2').waypoint(function() {
    $('#transition-line6').slideDown(2000);
  }, {
    offset: '55%'
  });

  $('#causes-container2').waypoint(function() {
    $( "#cow-quote-container:hidden:first" ).fadeIn(2000);
  }, {
    offset: '20%'
  });


// difference container scroll //

  $('#difference-container').waypoint(function() {
    $( "#difference-title:hidden:first" ).fadeIn(1500);
  }, {
    offset: '75%'
  });

// creds container scroll //

$('#last-section-container').waypoint(function() {
  $( "#citation-container:hidden:first" ).fadeIn(3000);
}, {
  offset: '25%'
});

// temp buttons hover here //

  $(".temp-button").hover(function() {
    $(this).addClass("button-hover");
  }, function() {
    $(this).removeClass("button-hover");
  });

// temp button 1 set here //

$('#temp-container').waypoint(function() {
  $('#temp-button1').addClass('button-active');
  $("#thermometer-rectangle").css('height', '350px');
  $("#thermometer-rectangle").css('top', '8%');
  $('#temp-button2').removeClass('button-active');
  $('#temp-button3').removeClass('button-active');
  $('#temp-button4').removeClass('button-active');
  $('#temp-button5').removeClass('button-active');
  $('div.temp-number').html('0.87 &deg;C');
}, {
  offset: '100%'
});

// temp buttons toggle here //

  $("#temp-button1").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
      $('div.temp-number').html('0.87 &deg;C');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
      $('div.temp-number').html('0.87 &deg;C');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
      $('div.temp-number').html('0.87 &deg;C');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
      $('div.temp-number').html('0.87 &deg;C');

    } else if ($("#temp-button1").hasClass("button-active")){
      $("#temp-button1").removeClass("button-active");
      $('div.temp-number').html('0.87 &deg;C');

    } else {
      $("#temp-button1").addClass("button-active");
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
      $('div.temp-number').html('0.87 &deg;C');

    }

  });

  $("#temp-button2").click(function(){

    if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '175px');
      $("#thermometer-rectangle").css('top', '37%');
      $('div.temp-number').html('0.42 &deg;C');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '175px');
      $("#thermometer-rectangle").css('top', '37%');
      $('div.temp-number').html('0.42 &deg;C');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '175px');
      $("#thermometer-rectangle").css('top', '37%');
      $('div.temp-number').html('0.42 &deg;C');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '175px');
      $("#thermometer-rectangle").css('top', '37%');
      $('div.temp-number').html('0.42 &deg;C');

    } else if ($("#temp-button2").hasClass("button-active")){
      $("#temp-button2").removeClass("button-active");
      $('#temp-number2').css('display', 'block');
      $('#temp-number1').css('display', 'none');
      $('div.temp-number').html('0.42 &deg;C');

    } else {
      $("#temp-button2").addClass("button-active");
      $("#thermometer-rectangle").css('height', '175px');
      $("#thermometer-rectangle").css('top', '37%');
      $('div.temp-number').html('0.42 &deg;C');
    }

  });

  $("#temp-button3").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '88px');
      $("#thermometer-rectangle").css('top', '54%');
      $('div.temp-number').html('0.28 &deg;C');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '88px');
      $("#thermometer-rectangle").css('top', '54%');
      $('div.temp-number').html('0.28 &deg;C');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '88px');
      $("#thermometer-rectangle").css('top', '54%');
      $('div.temp-number').html('0.28 &deg;C');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '88px');
      $("#thermometer-rectangle").css('top', '54%');
      $('div.temp-number').html('0.28 &deg;C');

    } else if ($("#temp-button3").hasClass("button-active")){
      $("#temp-button3").removeClass("button-active");
      $('div.temp-number').html('0.28 &deg;C');

    } else {
      $("#temp-button3").addClass("button-active");
      $("#thermometer-rectangle").css('height', '88px');
      $("#thermometer-rectangle").css('top', '54%');
      $('div.temp-number').html('0.28 &deg;C');

    }

  });

  $("#temp-button4").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '20px');
      $("#thermometer-rectangle").css('top', '68%');
      $('div.temp-number').html('-0.03 &deg;C');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '20px');
      $("#thermometer-rectangle").css('top', '68%');
      $('div.temp-number').html('-0.03 &deg;C');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '20px');
      $("#thermometer-rectangle").css('top', '68%');
      $('div.temp-number').html('-0.03 &deg;C');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '20px');
      $("#thermometer-rectangle").css('top', '68%');
      $('div.temp-number').html('-0.03 &deg;C');

    } else if ($("#temp-button4").hasClass("button-active")){
      $("#temp-button4").removeClass("button-active");
      $('div.temp-number').html('-0.03 &deg;C');

    } else {
      $("#temp-button4").addClass("button-active");
      $("#thermometer-rectangle").css('height', '20px');
      $("#thermometer-rectangle").css('top', '68%');
      $('div.temp-number').html('-0.03 &deg;C');

    }

  });

  $("#temp-button5").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '30px');
      $("#thermometer-rectangle").css('top', '66%');
      $('div.temp-number').html('0.09 &deg;C');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '30px');
      $("#thermometer-rectangle").css('top', '66%');
      $('div.temp-number').html('0.09 &deg;C');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '30px');
      $("#thermometer-rectangle").css('top', '66%');
      $('div.temp-number').html('0.09 &deg;C');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '30px');
      $("#thermometer-rectangle").css('top', '66%');
      $('div.temp-number').html('0.09 &deg;C');

    } else if ($("#temp-button5").hasClass("button-active")){
      $("#temp-button5").removeClass("button-active");
      $('div.temp-number').html('0.09 &deg;C');

    } else {
      $("#temp-button5").addClass("button-active");
      $("#thermometer-rectangle").css('height', '30px');
      $("#thermometer-rectangle").css('top', '66%');
      $('div.temp-number').html('0.09 &deg;C');

    }

  });

// slide down on making a difference boxes //

  $("#action-box1").hover(function() {
    $('#recycle-image').css('display', 'none');
    $('#recycle-content').css('display', 'block');
  });

  $("#action-box2").hover(function() {
    $('#broccoli-image').css('display', 'none');
    $('#broccoli-content').css('display', 'block');
  });

  $("#action-box3").hover(function() {
    $('#wheel-image').css('display', 'none');
    $('#wheel-content').css('display', 'block');
  });

  $("#action-box4").hover(function() {
    $('#loudspeaker-image').css('display', 'none');
    $('#loudspeaker-content').css('display', 'block');
  });

// scroll in "fight climate change" //

$('#last-section-container').waypoint(function() {
  $( "#fight-climate-change:hidden:first" ).fadeIn(3000);
}, {
  offset: '75%'
});

$('#last-section-container').waypoint(function() {
  $( "#save-earth:hidden:first" ).fadeIn(3000);
}, {
  offset: '30%'
});

});

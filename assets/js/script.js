$(document).ready(function() {
  function parallax() {
      var scrolled = $(window).scrollTop();
      $('#title-page-content').css('top', -(scrolled * 0.6) + 'px')
  }

  $(window).scroll(function() {
      parallax();
  });

// problem container scroll //

  $('#problem-container').waypoint(function() {
    $( "#problem-title:hidden:first" ).fadeIn(1500);
  }, {
    offset: '75%'
  });

// causes container scroll //

  $('#causes-container').waypoint(function() {
    $( "#causes-title:hidden:first" ).fadeIn(1500);
  }, {
    offset: '75%'
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

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button1').addClass('button-active');
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');

    } else if ($("#temp-button1").hasClass("button-active")){
      $("#temp-button1").removeClass("button-active");

    } else {
      $("#temp-button1").addClass("button-active");
      $("#thermometer-rectangle").css('height', '350px');
      $("#thermometer-rectangle").css('top', '8%');
    }

  });

  $("#temp-button2").click(function(){

    if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '300px');
      $("#thermometer-rectangle").css('top', '15%');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '300px');
      $("#thermometer-rectangle").css('top', '15%');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '300px');
      $("#thermometer-rectangle").css('top', '15%');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button2').addClass('button-active');
      $("#thermometer-rectangle").css('height', '300px');
      $("#thermometer-rectangle").css('top', '15%');

    } else if ($("#temp-button2").hasClass("button-active")){
      $("#temp-button2").removeClass("button-active");
      $('#temp-number2').css('display', 'block');
      $('#temp-number1').css('display', 'none');

    } else {
      $("#temp-button2").addClass("button-active");
      $("#thermometer-rectangle").css('height', '300px');
      $("#thermometer-rectangle").css('top', '15%');
      $('#temp-number2').addClass('temp-number-active');
    }

  });

  $("#temp-button3").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '250px');
      $("#thermometer-rectangle").css('top', '22%');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '250px');
      $("#thermometer-rectangle").css('top', '22%');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '250px');
      $("#thermometer-rectangle").css('top', '22%');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button3').addClass('button-active');
      $("#thermometer-rectangle").css('height', '250px');
      $("#thermometer-rectangle").css('top', '22%');

    } else if ($("#temp-button3").hasClass("button-active")){
      $("#temp-button3").removeClass("button-active");

    } else {
      $("#temp-button3").addClass("button-active");
      $("#thermometer-rectangle").css('height', '250px');
      $("#thermometer-rectangle").css('top', '22%');
    }

  });

  $("#temp-button4").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '200px');
      $("#thermometer-rectangle").css('top', '32%');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '200px');
      $("#thermometer-rectangle").css('top', '32%');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '200px');
      $("#thermometer-rectangle").css('top', '32%');

    } else if ($('#temp-button5').hasClass('button-active')) {
      $('#temp-button5').removeClass('button-active');
      $('#temp-button4').addClass('button-active');
      $("#thermometer-rectangle").css('height', '200px');
      $("#thermometer-rectangle").css('top', '32%');

    } else if ($("#temp-button4").hasClass("button-active")){
      $("#temp-button4").removeClass("button-active");

    } else {
      $("#temp-button4").addClass("button-active");
      $("#thermometer-rectangle").css('height', '200px');
      $("#thermometer-rectangle").css('top', '32%');
    }

  });

  $("#temp-button5").click(function(){

    if ($('#temp-button2').hasClass('button-active')) {
      $('#temp-button2').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '100px');
      $("#thermometer-rectangle").css('top', '52%');

    } else if ($('#temp-button1').hasClass('button-active')) {
      $('#temp-button1').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '100px');
      $("#thermometer-rectangle").css('top', '52%');

    } else if ($('#temp-button3').hasClass('button-active')) {
      $('#temp-button3').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '100px');
      $("#thermometer-rectangle").css('top', '52%');

    } else if ($('#temp-button4').hasClass('button-active')) {
      $('#temp-button4').removeClass('button-active');
      $('#temp-button5').addClass('button-active');
      $("#thermometer-rectangle").css('height', '100px');
      $("#thermometer-rectangle").css('top', '52%');

    } else if ($("#temp-button5").hasClass("button-active")){
      $("#temp-button5").removeClass("button-active");

    } else {
      $("#temp-button5").addClass("button-active");
      $("#thermometer-rectangle").css('height', '100px');
      $("#thermometer-rectangle").css('top', '52%');
    }

  });

// slide down on making a difference boxes //

  $("#action-box1").hover(function() {
    $('#recycle-image').css('display', 'none');
    $('#recycle-content').css('display', 'block');
  });

  $("#action-box2").hover(function() {
    $('#plate-image').css('display', 'none');
    $('#plate-content').css('display', 'block');
  });

  $("#action-box3").hover(function() {
    $('#wheel-image').css('display', 'none');
    $('#wheel-content').css('display', 'block');
  });

  $("#action-box4").hover(function() {
    $('#speech-image').css('display', 'none');
    $('#speech-content').css('display', 'block');
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
  offset: '90%'
});

});

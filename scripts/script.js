$( document ).ready(function() {

  function callSign() {

  $('.sign').click(function() {
    var sign = $(this).data('sign');
      console.log(sign);
      return sign;

    $.ajax({ 
    url:'http://sandipbgt.com/theastrologer/api/horoscope/' + sign + '/today',
    sign: sign
    }).done(function(data) {
      var horoscope = data.response['0'].horoscope;
      console.log(horoscope);
    });

  });

 };

 callSign();


});


  // $('#daily-blurb').hide();
  // $('#navbar').hide();
  // $('#halfmoon-two').hide();
  // navigator.geolocation.getCurrentPosition(success);

  // function success(position) {
  //   console.log(position);
  //   var latitude = position.coords.latitude;
  //   var longitude = position.coords.longitude;

  //   var today = new Date();
  //   var dd = today.getDate();
  //   var mm = today.getMonth()+1;

  //   var yy = today.getFullYear();
  //     if(dd<10){
  //         dd='0'+dd
  //     }
  //     if(mm<10){
  //         mm='0'+mm
  //     }
  //   var today = dd+'/'+mm+'/'+yy;
  //   var date = $('#date').html(today);

  //   $.ajax({
  //   url:'https://api.aerisapi.com/sunmoon/?p=' + latitude + ',' + longitude + '&to=:' + today + '&client_id=id5zV9deaqOeGuK3mYadq&client_secret=Yfvc6cceJpNkt5aqmJB5i30VV1WfmS6z75d3hWRy',
  //   today: today,
  //   latitude: latitude,
  //   longitude: longitude
  //   }).done(function(data) {
  //   var moon = $('#moonphase').text(data.response['0'].moon.phase.name);
  //   var sunrise = ($('#sunrise').text(data.response['0'].sun.riseISO)).text();
  //   var sunset = ($('#sunset').text(data.response['0'].sun.setISO)).text();
  //   var rise = $('#sunrise').html('<p>rise ' + sunrise.substr(11, 5)  + '</p>');
  //   var set = $('#sunset').html('<p>set ' + sunset.substr(11, 5) + '</p>');

  //     switch(moon.html()) {
  //       case 'waxing gibbous':
  //           $('#moon-icon').html('<img src="./images/waxing-gibbous.png" id="moon-icon" />');
  //           break;
  //       case 'waning gibbous':
  //           $('#moon-icon').html('<img src="./images/waning-gibbous.png" id="moon-icon" />')
  //           break;
  //       case 'waxing crescent':
  //           $('#moon-icon').html('<img src="./images/waxing-crescent.png" id="moon-icon" />')
  //           break;
  //       case 'waning crescent':
  //           $('#moon-icon').html('<img src="./images/waning-crescent.png" id="moon-icon" />')
  //           break;
  //       case 'full moon':
  //           $('#moon-icon').html('<img src="./images/full.png" id="moon-icon" />')
  //           break;
  //       case 'new moon':
  //           $('#moon-icon').html('<img src="./images/new.png" id="moon-icon" />')
  //           break;
  //       case 'first moon':
  //           $('#moon-icon').html('<img src="./images/first.png" id="moon-icon" />')
  //           break;
  //       case 'last moon':
  //           $('#moon-icon').html('<img src="./images/last.png" id="moon-icon"/>')
  //           break;
  //       }
  //   });
 //   key = {
  //     'aries': 0,
  //     'taurus': 1,
  //     'gemini': 2,
  //     'cancer': 3,
  //     'leo': 4,
  //     'virgo': 5,
  //     'libra': 6,
  //     'scorpio': 7,
  //     'sagittarius': 8,
  //     'capricorn': 9,
  //     'aquarius': 10,
  //     'pisces': 11
  //   }

  //   function showContent(data) {
  //     $('#daily-icon').click(function() {
  //       $('#blurb-content').html('<p>' + data.Daily_Horoscope + '</p>')
  //     });
  //     $('#love-icon').click(function() {
  //       $('#blurb-content').html('<p>' + data.Love + '</p>')
  //     });
  //     $('#wellness-icon').click(function() {
  //       $('#blurb-content').html('<p>' + data.Wellness + '</p>')
  //     });
  //     $('#career-icon').click(function() {
  //       $('#blurb-content').html('<p>' + data.Career + '</p>')
  //     });
  //   };

  //   $('.sign').click(function() {
  //     var sign = $(this).data('sign');
  //     var currentSign = data[key[sign]];
  //     $('#halfmoon').hide();
  //     $('#sunmoon-panel').hide();
  //     $('#ring').hide();
  //     $('#site-name').hide();
  //     $('.logo').hide();
  //     $('#lines').hide();
  //     $('#halfmoon-two').show();
  //     $('#navbar').show();
  //     $('#sun-sign').html('<p>' + currentSign.Sign + '</p>');
  //     $('#blurb-content').html('<p>' + currentSign.Daily_Horoscope + '</p>');
  //     showContent(currentSign);
  //   });

  //   $('#circle-icon').click(function() {
  //     $('.current').removeClass( "current" );
  //     $('#navbar').hide();
  //     $('#halfmoon-two').hide();
  //     $('#sun-sign').html('<p>' + ' ' + '</p>');
  //     $('#blurb-content').html('<p>' + ' ' + '</p>');
  //     $('#lines').show();
  //     $('#halfmoon').show();
  //     $('#sunmoon-panel').show();
  //     $('#ring').show();
  //     $('#site-name').show();
  //     $('.logo').show();
  //   });

  //   $('#daily-icon').click(function(currentSign) {
  //     $('#blurb-content').html('<p>' + currentSign.Daily_Horoscope + '</p>');
  //   })

  //   $('#love-icon').click(function(currentSign) {
  //     $('#blurb-content').html('<p>' + currentSign.Love + '</p>');
  //   })

  //   $('#wellness-icon').click(function(currentSign) {
  //     $('#blurb-content').html('<p>' + currentSign.Wellness + '</p>');
  //   })

  //   $('#career-icon').click(function(currentSign) {
  //     $('#blurb-content').html('<p>' + currentSign.Career + '</p>');
  //   })

  // });





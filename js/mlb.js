$(function() {
  var MlbTeam = function(league, division, teamName, shortName, teamCity, firstYear, divisionsWon, pennantsWon, worldSeriesWon) {
    this.league = league;
    this.division = division;
    this.teamName = teamName;
    this.shortName = shortName;
    this.teamCity = teamCity;
    this.firstYear= firstYear;
    this.divisionsWon = divisionsWon;
    this.pennantsWon = pennantsWon;
    this.worldSeriesWon = worldSeriesWon;
    this.briefHistory = function() {
      return "<p>Since " + this.firstYear + ", the " + this.teamName + " have won the:<br /><br />" +
            this.league + " " + this.division +  ": " + this.divisionsWon + " time(s)<br />" +
            this.league + " Pennant: " + this.pennantsWon + " time(s)<br />" +
            "The World Series: " + this.worldSeriesWon + " time(s)</p>";
      };
    };

  var seattleMariners = new MlbTeam("American League", "West", "Seattle Mariners","M's", "Seattle",  1977, 3, 0, 0),
      oaklandAthletics = new MlbTeam("American League", "West", "Oakland Athletics", "A's", "Oakland", 1968, 16, 15, 9),
      texasRangers = new MlbTeam("American League", "West", "Texas Rangers", "Rangers", "Arlington", 1972, 5, 2, 0),
      houstonAstros = new MlbTeam("American League", "West", "Houston Astros", "Astros", "Houston", 1965, 7, 1, 0),
      laAngels = new MlbTeam("American League", "West", "Los Angeles Angels", "Halos", "Anaheim", 1961, 9, 1, 1);
  var detroitTigers = new MlbTeam("American League", "Central", "Detroit Tigers", "Tigers", "Detroit", 1901, 7, 11, 4),
      kansasCityRoyals = new MlbTeam("American League", "Central", "Kansas City Royals", "Royals", "Kansas City", 1969, 6, 3, 1),
      minnesotaTwins = new MlbTeam("American League", "Central", "Minnesota Twins", "Twins", "Minneapolis", 1961, 10, 6, 3),
      chicagoWhiteSoxs = new MlbTeam("American League", "Central", "Chicago White Sox", "White Soxs", "Chicago", 1901, 5, 6, 3),
      clevelandIndians = new MlbTeam("American League", "Central", "Cleveland Indians", "Tribe", "Cleveland", 1915, 7, 5, 2);
  var newYorkYankees = new MlbTeam("American League", "East", "New York Yankees", "Yankees", "New York", 1913, 18, 40, 27),
      torontoBlueJays = new MlbTeam("American League", "East", "Toronto Blue Jays", "Blue Jays", "Toronto", 1977, 5, 2, 2),
      baltimoreOrioles = new MlbTeam("American League", "East", "Baltimore Orioles", "Orioles", "Baltimore", 1954, 9, 7, 3),
      bostonRedSoxs = new MlbTeam("American League", "East", "Boston Red Sox", "Red Sox", "Boston", 1901, 7, 13, 8),
      tampaBayRays = new MlbTeam("American League", "East", "Tampa Bay Rays", "Rays", "Tampa Bay", 1998, 2, 1, 0);
  var losAngelesDodgers = new MlbTeam("National League", "West", "Los Angeles Dodgers", "Dodgers", "Los Angeles", 1883, 13, 21, 6),
      sanFranciscoGiants = new MlbTeam("National League", "West", "San Francisco Giants", "Giants", "San Francisco", 1883, 8, 23, 8),
      sanDiegoPadres = new MlbTeam("National League", "West", "San Diego Padres", "Friars", "San Diego", 1969, 5, 2, 0),
      arizonaDaimondbacks = new MlbTeam("National League", "West", "Arizona Diamondbacks", "Diamondbacks", "Phoenix", 1998, 5, 1, 1),
      coloradoRockies = new MlbTeam("National League", "West", "Colorado Rockies", "Rockies", "Denver", 1993, 0, 1, 0);
  var stLouisCardinals = new MlbTeam("National League", "Central", "St Louis Cardinals", "Cardinals", "St. Louis", 1882, 12, 19, 11),
      pittsburghPirates = new MlbTeam("National League", "Central", "Pittsburgh Pirates", "Bucs", "Pittsburgh", 1912, 9, 9, 5),
      milwaukeeBrewers = new MlbTeam("National League", "Central", "Milwaukee Brewers", "Brew Crew", "Milwaukee", 1969, 3, 1, 0),
      cincinnatiReds = new MlbTeam("National League", "Central", "Cincinnati Reds", "Reds", "Cincinnati", 1881, 10, 9, 5),
      chicagoCubs = new MlbTeam("National League", "Central", "Chicago Cubs", "Cubbies", "Chicago", 1870, 5, 16, 2);
  var washingtonNationals = new MlbTeam("National League", "East", "Washington Nationals", "Nats", "Washington D.C.", 2005, 2, 0, 0),
      atlantaBraves = new MlbTeam("National League", "East", "Atlanta Braves", "Braves", "Atlanta", 1966, 17, 5, 1),
      miamiMarlins = new MlbTeam("National League", "East", "Miami Marlins", "Marlins", "Miami", 1993, 0, 2, 2),
      newYorkMets = new MlbTeam("National League", "East", "New York Mets", "Mets", "New York", 1962, 5, 4, 2),
      philadelphiaPhillies = new MlbTeam("National League", "East", "Philadelphia Phillies", "Phillies", "Philadelphia", 1883, 11, 7, 2);

  var teamPool = [seattleMariners,oaklandAthletics, laAngels, texasRangers, houstonAstros, detroitTigers, kansasCityRoyals, chicagoWhiteSoxs, clevelandIndians, minnesotaTwins,bostonRedSoxs, newYorkYankees, torontoBlueJays, tampaBayRays, baltimoreOrioles, losAngelesDodgers, sanFranciscoGiants,sanDiegoPadres, arizonaDaimondbacks, coloradoRockies, stLouisCardinals, milwaukeeBrewers, cincinnatiReds, chicagoCubs, pittsburghPirates, washingtonNationals, atlantaBraves, newYorkMets, miamiMarlins, philadelphiaPhillies],
      id = "";
  function searchArray() {
    for(var i = 0; i < teamPool.length; i++) {
      if(teamPool[i].teamName === id) {
        return teamPool[i].briefHistory();
      }
    }
  }

  var $dropDown = $('#dropdown'),
      $header = $('header');
  $('.banner').unslider({
    speed: 500,               //  The speed to animate each slide (in milliseconds)
    delay: 2500,              //  The delay between slide animations (in milliseconds)
    complete: function() {},  //  A function that gets called after every slide animation
    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    dots: true,               //  Display dot navigation
    fluid: false              //  Support responsive design. May break non-responsive designs
  });
  $(window).on('scrollstart', function() {
    $header.slideUp(500);
  });
  $(window).on('scrollstop', function() {
    $header.slideDown(1000);
  });
  $('nav img').mousedown(function(){
    $(this).css('border', '3px solid #a7a8aa')
    .css('box-shadow', '0 0 0 0');
    $(this).mouseup(function(){
      $(this).css('border', '1px solid')
      .css('border-radius', '15%')
      .css('box-shadow', '3px 3px 3px gray');
    });
  });
  $('#arrowup').mousedown(function() {
    $(this).css('border', '1px solid')
    .css('border-radius', '15%')
    .css('box-shadow', '3px 3px 3px gray');
    $(this).mouseup(function(){
      $(this).css('border', '1px solid')
      .css('border-radius', '15%')
      .css('box-shadow', '3px 3px 3px gray');
    });
  });
  $dropDown.hide();
  $('.menu-icon').click(function() {
    $dropDown.slideToggle('slow');
  });
  $('#american').change(function() {
    id = $("#american option:selected").attr('data-name');
    var history = searchArray();
    $('.before').addClass('after');
    $('.after').html(history);
  });
  $('#national').change(function() {
    id = $("#national option:selected").attr('data-name');
    var history = searchArray();
    $('.before').addClass('after');
    $('.after').html(history);
  });
});




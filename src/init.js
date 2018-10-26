$(document).ready(function() {
  window.dancers = [];
  $('.lineUp').on('click', function(event) {
    $('.dancer').css('left', function(index) {
      return index * 120;
    });
    $('.dancer').css('top', '300px');
  });

  $('.princess').on('click', function(event) {
    var peach = new makePeachDancer(300, 300, Math.random() * 10000);
    $('body').append(peach.$node);

    // Find all bowsers in the window.dancers array

    var bowsers = window.dancers.filter(function(character) {
      return character.dancerName.includes('Bowser');
    });

    var notBowsers = window.dancers.filter(function(character) {
      return !character.dancerName.includes('Bowser');
    });

    // // 300, 300
    for (var i = 0; i < bowsers.length; i += 4) {
      bowsers[i].setPosition(250, 400);
      bowsers[i + 1].setPosition(250, 0);
      bowsers[i + 2].setPosition(500, 200);
      bowsers[i + 3].setPosition(0, 200);
    }
    //   // move all the bowsers to surround princess peach

    for (var i = 0; i < notBowsers.length; i++) {
      if (notBowsers[i].dancerPosition.left < 500) {
        notBowsers[i].setPosition(
          $('body').height() * (Math.random(),
          ($('body').width() + 500)));
      }
    }


  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position


    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 10000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});
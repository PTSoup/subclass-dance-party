$(document).ready(function() {
  window.dancers = [];
  //<span></span>
  //element.display.left/top
  $('.lineUp').on('click', function(event) {
    $('.dancer').css('left', function(index) {
      return index * 120;
    });
    $('.dancer').css('top', '300px');
  });

  $('.princess').on('click', function(event) {
    // var peach = new makePeachDancer(
    //   $('body').height() * Math.random(),
    //   $('body').width() * Math.random(),
    //   Math.random() * 10000
    // );
    //$('body').append(peach.$node);//value **2

    // var peachPosition = $('.peach').position();

    // var peachAbsolute = Math.pow(peachPosition.left, 2) + Math.pow(peachPosition.top, 2);

    // $('.bowser').each(function(index) {
    //   var bowserPosition = this.position();
    //   var bowserAbsolute = Math.pow(this.left, 2) + Math.pow(this.top, 2);
    //   //absolute difference of bowserAb - peachAb
    //   //find the smallest
    //   //change left and top to princess position

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
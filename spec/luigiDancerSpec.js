describe('luigiDancer', function() {

  var luigiDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    luigiDancer = new makeLuigiDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(luigiDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(luigiDancer, 'step');
      expect(luigiDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(luigiDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(luigiDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should change position when Lineup is clicked', function() {
    var luigi = new makeLuigiDancer(10, 20, 1000);
    expect(luigiDancer.dancePosition).to.be.an.instanceof(jQuery);
  });

});

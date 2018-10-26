describe('bowserDancer', function() {

  var bowserDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bowserDancer = new makeBowserDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bowserDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bowserDancer, 'step');
      expect(bowserDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bowserDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bowserDancer.step.callCount).to.be.equal(2);
    });
  });
});

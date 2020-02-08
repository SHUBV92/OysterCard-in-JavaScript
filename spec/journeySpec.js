describe("Journey", function() {
  var journey;
    var card; 

  beforeEach(function() {
    card = new Card()
  });

  describe("Joruney History", function() {
    it("Records the Journey History", function() {
    card.touchIn("Barking",4)
    card.touchOut("Aldgate",4)
    journey = new Journey(card);
    
    journey.journeyHistory()
    expect(journey.journey).toContain("Barking to Aldgate");
    });


  });
});

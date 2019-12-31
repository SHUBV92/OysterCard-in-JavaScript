describe("Card", function() {
  var card;

  beforeEach(function() {
    card = new Card();
  });

  it("Tops Up balance to Card", function() {
    card.topUp(20);
    expect(card.balance).toEqual(20);
  });

  it("Withdraws balance to Card", function() {
    card.topUp(20);
    card.withdraw(10);
    expect(card.balance).toEqual(10);
  });

  describe("Contactless", function() {
    it("Can touch in", function() {
      card.touchIn("Aldgate");
      expect(card.touchin).toBe(true);
    });

    it("Can touch out", function() {
      card.touchOut("Barking");
      expect(card.touchin).toBe(false);
    });

    it("Register station when touch in", function() {
      card.touchIn("barking");
      expect(card.touchin).toBe(true);
    });

    it("Change station when touch in", function() {
      expect(card.touchIn).toBe(true);
    });

    it("Change station when touch in", function() {
      expect(card.touchIn).toBe(true);
    });
  });
});

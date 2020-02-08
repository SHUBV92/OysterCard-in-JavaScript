function Journey (card) {
    this.journey = []; 
    this.entryStation = card.entryStation
    this.exitStation = card.exitStation
}   

Journey.prototype.journeyHistory = function() {
    this.journey.push(this.entryStation + " to " + this.exitStation);
  };
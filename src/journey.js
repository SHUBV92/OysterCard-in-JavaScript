function Journey () {
    this.journey = []; 
}

Journey.prototype.journeyHistory = function() {
    this.journey += this.entryStation + " to " + this.exitStation;
  };
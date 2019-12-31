function Card() {
  this.balance = 0;
  this.entryStation = null;
  this.exitStation = null;
  this.touchin = false;
  this.entryZone = 1;
  this.exitZone = null;
}

Card.prototype.topUp = function(amount) {
  if (this.balance === 90) throw "You need to save some money";
  this.balance += amount;
};

Card.prototype.withdraw = function(amount) {
  if (this.balance === 0) throw "Stop being a bum";
  this.balance -= amount;
};

Card.prototype.touchIn = function(station, zone) {
  this.entryStation = station;
  this.entryZone = zone;
  this.touchIn = true;
};

Card.prototype.touchOut = function(station, zone) {
  this.exitStation = station;
  this.exitZone = zone;
  this.touchIn = false;
};

Card.prototype.zone = function() {
  if (this.exitZone === 1) {
    this,withdraw(10)
  }
  if (this.exitZone === 2) {
    this.withdraw(15)
  }
  if (this.exitZone === 3) {
    this.withdraw(20)
  }
};

Card.prototype.penality = function() {
  if (this.touchIn === true) {
    this.withdraw(30);
    this.penality = "You have been given a Penality";
  }
};

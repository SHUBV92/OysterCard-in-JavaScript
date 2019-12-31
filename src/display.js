function Display(card) {
    this.show = card
    this.balance  = card.balance
}

Display.prototype.display = function() {

    return this.balance

}



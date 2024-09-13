export class CountService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  addActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('Changed to inactive: ' + this.activeToInactiveCounter);
  }

  addInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('Changed to active: ' + this.inactiveToActiveCounter);
  }

  constructor() { }
}

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    loanCreated: function(loan) {
     this.set('loan', loan);
    }
  }
});

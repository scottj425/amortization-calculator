import Component from '@ember/component';

export default Component.extend({
  months: '',
  principal: '',
  rate: '',
  actions: {
    generateSchedule: function () {
      const monthlyRate = (this.get('rate') / 12) / 100;
      let balance = this.get('principal');
      const terms = this.get('months');
      let principalToDate = 0;
      let interestToDate = 0;

      const payment = balance * (monthlyRate/(1-Math.pow(
        1+monthlyRate, -terms)));

      let paymentSchedule = [];

      for (let i = 0; i < terms; i++) {
        let interest = (balance * monthlyRate).toFixed(2);
        let principal = (payment - interest).toFixed(2);
        principalToDate = (principalToDate + (payment - interest));
        interestToDate = (interestToDate + (balance * monthlyRate));
        paymentSchedule.push({balance: '$' + balance, interest: '$' + interest, principal: '$' + principal, principalToDate: '$' + principalToDate.toFixed(2), interestToDate: '$' + interestToDate.toFixed(2)});
        balance = (balance - (payment - interest).toFixed(2)).toFixed(2);
      }
      let loan = {
        amount: this.get('principal'),
        rate: this.get('rate'),
        months: this.get('months'),
        monthly: payment.toFixed(2),
        total: (payment * terms).toFixed(2),
        schedule: paymentSchedule
      };
      console.log(loan);
      this.get('loanCreated')(loan);
    }
  }
});

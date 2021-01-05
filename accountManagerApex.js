import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';

export default class AccountManagerApex extends LightningElement {
  @track numberOfRecords;
  @track accounts;

  get responseReceived() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

  numberOfAccountChangeHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  getAccounts() {
    getAllAccounts({ numOfRecords: this.numberOfRecords })
      .then(response => {
        this.accounts = response;
      })
      .catch(error => {
        console.error('Error in getting accounts');
      });
  }
}

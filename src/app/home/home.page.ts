import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // set dynamic data and color set here
  features: any[] = [
      {id:1, name:'Top Up', src:'assets/icon/top_up.svg', background:'rgba(56, 128, 255,0.1)',  page:''},
      {id:2, name:'Withdraw', src:'assets/icon/cash_withdrawal.svg',background:'rgba(61, 194, 255,0.1)', page:''},
      {id:3, name:'Send', src:'assets/icon/send.svg',background:'rgba(255, 196, 9,0.1)', page:''},
      {id:4, name:'Pay', src:'assets/icon/debit_card.svg',background:'rgba(235, 68, 90,0.1)', page:''},
  ];

   // set dynamic list data here
  transaction: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time:'3:00 PM'},
    {id: 2, vendor: 'Received from Paytm', image: '', amount: 5000, time:'7:30 AM'},
    {id: 3, vendor: 'Received from GPay', image: '', amount: -500, time:'6:00 PM'},
    {id: 4, vendor: 'Received from Ketan', image: '', amount: 2500, time:'8:00 PM'},
    {id: 5, vendor: 'Received from Hiren', image: '', amount: 15500, time:'5:00 PM'},
  ];
  constructor() {}

}

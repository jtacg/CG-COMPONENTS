import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MdSliderModule} from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coffee-savings',
  templateUrl: './coffee-savings.component.html',
  styleUrls: ['./coffee-savings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  outputs: ['totalSavings', 'futureValue'],
})

export class CoffeeSavingsComponent implements OnInit {
  //@Input() public numberOfCups: number;
  //@Input() public numberOfYears: number;

  numberOfCups:number = 2
  numberOfYears:number = 20
  pricePerCup:number = 5
  totalSavings:number = 0
  futureValue:number = 0

  constructor() { }

  ngOnInit() {
      this.calcCoffeeSavings(this.numberOfCups, this.numberOfYears);
  }


  calcCoffeeSavings(numberOfCups, numberOfYears){
    console.log("Cups: " + numberOfCups + "  Years: " + numberOfYears);
    this.totalSavings = ((numberOfCups * 262) * numberOfYears) * this.pricePerCup;
    //return this.totalSavings;
  }


}


// Compounding Interest Calc
// for ( i = 1; i <= months; i++ ) {
//    futureValue = (futureValue + investment) * (1 + monthlyRate);
// }

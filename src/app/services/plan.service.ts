import { Injectable }  from '@angular/core';
import { Plan } from '../models/plan';

@Injectable()
export class PlanService {

plan : Plan =
  {
    planId: 123456789,
    name: "CORE Medical",
    type: "401k",
    experience: "bc",
    advisor: "Alex Smith",
    address: {
      street:  "123 Main Street",
      city:    "Anytown",
      state:   "California"
    }
  };

  constructor() {}

  /** Get existing plan as a Promise */
  getPlan() {
      return this.plan;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Plan } from '../models/plan';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
plan: any = []
  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.plan = this.planService.plan;
  }


}

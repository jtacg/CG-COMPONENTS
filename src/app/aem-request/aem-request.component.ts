import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
//import { AemService } from '../services/aem.service';
import { HttpClient }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SafeHtmlPipe } from '../safe-html/safe-html.pipe';
import { Plan } from '../models/plan';


@Component({
  selector: 'app-aem-request',
  templateUrl: './aem-request.component.html',
  styleUrls: ['./aem-request.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AemRequestComponent implements OnInit {
  @Input() plan: Plan;
  // private url = `https://www.americanfunds.com/advisor/service/contribute/ov/traditional-ira-contributions.brief.html`;
  //private url = `https://l0165075:23943/advisor/service/contribute/ov/traditional-ira-contributions.brief.html`;
  //https://www.stg.americanfunds.com/content/sites/american-funds/individual/us/en/fragments/capital-gains-2014.modal.html
  //https://www.stg.americanfunds.com/content/sites/american-funds/individual/us/en/fragments/open-an-account.modal.html
  convenience = '';
  title = "Take Advantage of Your Plan’s Benefits";


  constructor(
    private http: HttpClient,
    //private aemService: AemService
  ) {}

  ngOnInit(): void {
    // Old AEM 6.2 request
    //this.http.get('/content/dam/rp-enroll/convenience/jcr%3Acontent/renditions/mobile/jcr%3Acontent/jcr%3Adata', {responseType: 'text'})
    this.http.get('/content/dam/rp-enroll/convenience', {responseType: 'text'})
    .subscribe(
      resp => {
      // Read the result field from the JSON response.
      console.log(resp);
      this.convenience = resp;
      },
      err => {
        console.log("Something went wrong!");
      }
    )
  }
}

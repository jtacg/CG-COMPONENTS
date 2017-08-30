import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
//import { AemService } from '../services/aem.service';
import { HttpClient }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SafeHtmlPipe } from '../safe-html/safe-html.pipe';


@Component({
  selector: 'app-aem-request',
  templateUrl: './aem-request.component.html',
  styleUrls: ['./aem-request.component.css']
})

export class AemRequestComponent implements OnInit {
  // private url = `../assets/test.json`;
   private url = `../assets/test.html`;
  // private url = `https://www.americanfunds.com/advisor/service/contribute/ov/traditional-ira-contributions.brief.html`;
  //private url = `https://l0165075:23943/advisor/service/contribute/ov/traditional-ira-contributions.brief.html`;
  //https://www.stg.americanfunds.com/content/sites/american-funds/individual/us/en/fragments/capital-gains-2014.modal.html
  //https://www.stg.americanfunds.com/content/sites/american-funds/individual/us/en/fragments/open-an-account.modal.html
  data: string;
  title = "Welcome";

  constructor(
    private http: HttpClient,
    //private aemService: AemService
  ) {}

  ngOnInit(): void {
    this.http.get('../assets/test.html', {responseType: 'text'})
    .subscribe(
      data => {
      // Read the result field from the JSON response.
      console.log('DATA HERE: ' + data);
      this.data = data;
      },
      err => {
        console.log("Something went wrong!");
      }
    )
  }
}

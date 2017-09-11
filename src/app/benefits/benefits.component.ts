import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AemContentResponse } from '../models/content';

//import { BenefitsService }   from '../services/benefits.service';
import { LoggerService } from '../services/logger.service';
import { SafeHtmlPipe } from '../safe-html/safe-html.pipe';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class BenefitsComponent implements OnInit {
  aemContentResponse = AemContentResponse;
  //benefitsFrags: BenefitsContent[];
  private benefitsUrl = '/content/entities/rp_enroll_svc/benefits.caas.json';
  title = "Take Advantage of Your Plan’s Benefits";
  data = []
  cont = ""
  pageContentPaths:any = []
  pageContent:any = []
  isBusy = false;

  constructor(
    //private benefitsService: BenefitsService,
    private http: HttpClient,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.getFragments();
  }

  getFragments() {
    this.http.get<AemContentResponse>(this.benefitsUrl).subscribe(
      data => {
        this.pageContentPaths = data.assets;
        for (let path of this.pageContentPaths) {
          console.log(path["dam.path"]);
          this.http.get(path["dam.path"], {responseType: 'text'}).subscribe(
            cont => {
              this.cont = cont;
              this.pageContent.push(this.cont);
              console.log(cont);
            }
          )
        };
        console.log("Urls to page fragments: " + this.pageContentPaths);
      },
      //getContent(this.pageContentPaths));
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }


  //TODO
  // DONE - Push into content array the response from the path:
  // Push into content array the metadata for each path

}

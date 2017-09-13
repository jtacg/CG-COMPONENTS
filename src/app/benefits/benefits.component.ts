import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AemContentResponse } from '../models/content';

//import { BenefitsService }   from '../services/benefits.service';
import { Plan } from '../models/plan';
import { PlanService } from '../services/plan.service';
import { LoggerService } from '../services/logger.service';
import { SafeHtmlPipe } from '../safe-html/safe-html.pipe';


@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class BenefitsComponent implements OnInit {
  private aemContentResponse = AemContentResponse;
  private benefitsUrl = '/content/entities/rp_enroll_svc/benefits.caas.json';
  private title = "Take Advantage of Your Plan’s Benefits";
  plan: any = []
  assets: any = []
  fragments: any = []
    tag: any = []
  tags: any = []
  temp: any = []


  constructor(
    //private benefitsService: BenefitsService,
    private planService: PlanService,
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.plan = this.planService.plan;
    this.getFragments();
  }

  buildContent(asset): void {
    this.http.get(asset["dam.path"], { responseType: 'text' }).subscribe(
      data => {
        // Build fragment object with id, content and tags
        this.http.get(asset["dam.path"] + '/_jcr_content/metadata.caas.json').subscribe(
          tags => {
            this.tags = tags["tags"];
            this.fragments.push({
              id: asset.localpath.replace('/', ''),
              content: data,
              // This generates an error in console. Look for alternatives.
              tags: this.tags.join(' ')
            });
          }
        )
      }
    )
  }

  getFragments() {
    this.http.get<AemContentResponse>(this.benefitsUrl).subscribe(
      data => {
        this.assets = data.assets;
        for (let asset of this.assets) {
          this.buildContent(asset);
        };
        console.log(this.fragments);
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

  generateIcon(): void {}



  //TODO
  // Check meta data tags and match to available icons
  // DONE - Push into content array the response from the path:
  // DONE - Push into content array the metadata for each path

}

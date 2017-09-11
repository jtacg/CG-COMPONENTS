import { Injectable }    from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

//import { BenefitsContent }  from '../models/content';
import { LoggerService }    from '../services/logger.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'; // <-- add rxjs operator extensions used here
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw'; // <-- add rxjs Observable extensions used here



@Injectable()
export class BenefitsService {
  private benefitsUrl = '/content/entities/rp_enroll_svc/benefits.caas.json';

  constructor(
    private http: HttpClient,  // <-- inject http
    private logger: LoggerService
  ) { }

  // getData(){
  //   return this.http.get(this.benefitsUrl)
  //   .map(
  //     (results: Response) => BenefitsContent,
  //     this.logger.log("Service - This is my data: " + BenefitsContent)
  //   );
  // }

  getData() {
        this.http.get(this.benefitsUrl).subscribe(data => {
          console.log(data);
        });
      }

}

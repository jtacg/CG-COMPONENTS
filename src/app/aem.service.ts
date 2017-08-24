import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AemService {
  //private url = `../assets/test.json`;
  private url = `https://www.americanfunds.com/advisor/service/contribute/ov/traditional-ira-contributions.brief.html`;

  constructor(
    private http: HttpClient
  ) {}

  getData() {
    return this.http.get(this.url)
    .map((res:Response) => res.json());
  }

}

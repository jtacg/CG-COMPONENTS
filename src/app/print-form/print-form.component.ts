import { Component, OnInit } from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { HttpClient }        from '@angular/common/http';

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html',
  styleUrls: ['./print-form.component.scss']
})

export class PrintFormComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get(
      'https://www.americanfunds.com/advisor/service/contribute/ov/traditional-ira-contributions.brief.html',
      {
        responseType: 'text',
        observe: 'response'
      }
      )
      .subscribe(resp => console.log(resp.body));
  }

}

import { Component, OnInit } from '@angular/core';
import { AemService } from '../aem.service';

@Component({
  selector: 'app-aem-request',
  templateUrl: './aem-request.component.html',
  styleUrls: ['./aem-request.component.css']
})
export class AemRequestComponent implements OnInit {

  constructor(private aemService: AemService) {}
  results = {};

  ngOnInit() {
    this.aemService.getData().subscribe(data => {
      this.results = data;
      console.log(this.results);
    });
  }

}

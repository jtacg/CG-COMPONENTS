import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import { Stocks } from '../../data/data';

interface Compound {
  principal: number;
  interest: number;
  years: number;
}

@Component({
  selector: 'app-compound-interest-chart',
  templateUrl: './compound-interest-chart.component.html',
  styleUrls: ['./compound-interest-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompoundInterestChartComponent implements OnInit {

  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Line Chart';

  private margin = {top: 30, right: 30, bottom: 60, left: 60};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  private futureValue: any
  private principal: number;
  private interest: any;
  private years: number;
  private months: number;
  private rate: number;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right ;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg()
    this.initAxis();
    this.drawAxis();
    //this.drawLine();
    this.compounder(100, 6, 30);
  }

  private initSvg() {
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(Stocks, (d) => d.date ));
    this.y.domain(d3Array.extent(Stocks, (d) => d.value ));
  }

  private drawAxis() {

    this.svg.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3Axis.axisBottom(this.x));

    this.svg.append("g")
          .attr("class", "axis axis--y")
          .call(d3Axis.axisLeft(this.y))
          .append("text")
          .attr("class", "axis-title")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Price ($)");
  }

  // private drawLine() {
  //   this.line = d3Shape.line()
  //                      .x( (d: any) => this.x(d.date) )
  //                      .y( (d: any) => this.y(d.value) );
  //
  //   this.svg.append("path")
  //           .datum(Stocks)
  //           .attr("class", "line")
  //           .attr("d", this.line);
  // }

  private drawLine() {
    this.line = d3Shape.line()
                       .x( (d: any) => this.x(d.date) )
                       .y( (d: any) => this.y(d.value) );

    this.svg.append("path")
            //.datum(Stocks)
            .attr("class", "line")
            .attr("d", this.line);
  }

  // core functions
  private compounder(principal, rate, years) {

      this.principal = principal || 0;
      //this.interest = interest || 0;
      this.rate = rate || 0;
      this.years = years || 0;
      this.months = years * 12;

      this.futureValue = (this.principal * Math.pow((1 + (this.rate/(this.months*100))), (this.months * this.years)));

      this.interest = (this.futureValue.toFixed(2) - this.principal).toFixed(2);

      console.log("Principal: " + this.principal);
      console.log("Rate: " + this.rate);
      console.log("Years: " + this.years);
      console.log("Months: " + this.months);
      console.log("Total: " + this.futureValue.toFixed(2));
      console.log("Interest: " + this.interest);
      //return compound;
  }


  }

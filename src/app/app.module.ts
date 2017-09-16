import {
  NgModule,
  Pipe,
  PipeTransform}             from '@angular/core';

import { BrowserModule }           from '@angular/platform-browser';
import { RouterModule, Routes }    from '@angular/router';
import { HttpClientModule }          from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AemService }              from './services/aem.service';
import { PlanService }              from './services/plan.service';
import { BenefitsService }              from './services/benefits.service';
import { LoggerService }              from './services/logger.service';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

// Material Design
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  } from '@angular/material';


//components
import { TopNavComponent }         from './top-nav/top-nav.component';
import { PrintFormComponent }      from './print-form/print-form.component';
import { BlankPageComponent }      from './blank-page/blank-page.component';
import { AemRequestComponent }     from './aem-request/aem-request.component';
import { SafeHtmlPipe }            from './safe-html/safe-html.pipe';
import { WelcomeComponent }        from './welcome/welcome.component';
import { BenefitsComponent }       from './benefits/benefits.component';
import { CompoundInterestChartComponent } from './shared/compound-interest-chart/compound-interest-chart.component';
import { CoffeeSavingsComponent } from './coffee-savings/coffee-savings.component';
// import { PostComponent }           from './post/post.component';
// import { PostListComponent }       from './post-list/post-list.component';


@NgModule({
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  declarations: [
    AppComponent,
    TopNavComponent,
    PrintFormComponent,
    BlankPageComponent,
    AemRequestComponent,
    SafeHtmlPipe,
    WelcomeComponent,
    BenefitsComponent,
    CompoundInterestChartComponent,
    CoffeeSavingsComponent
    //PostComponent,
    //PostListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [
    //AemService
    PlanService,
    BenefitsService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

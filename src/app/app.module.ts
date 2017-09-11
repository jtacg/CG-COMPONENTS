import {
  NgModule,
  Pipe,
  PipeTransform}             from '@angular/core';

import { BrowserModule }           from '@angular/platform-browser';
import { RouterModule, Routes }    from '@angular/router';
import { HttpClientModule }          from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AemService }              from './services/aem.service';
import { PlanService }              from './services/plan.service';
import { BenefitsService }              from './services/benefits.service';
import { LoggerService }              from './services/logger.service';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

//components
import { TopNavComponent }         from './top-nav/top-nav.component';
import { PrintFormComponent }      from './print-form/print-form.component';
import { BlankPageComponent }      from './blank-page/blank-page.component';
import { AemRequestComponent }     from './aem-request/aem-request.component';
import { SafeHtmlPipe }            from './safe-html/safe-html.pipe';
import { WelcomeComponent }        from './welcome/welcome.component';
import { BenefitsComponent }       from './benefits/benefits.component';
// import { PostComponent }           from './post/post.component';
// import { PostListComponent }       from './post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PrintFormComponent,
    BlankPageComponent,
    AemRequestComponent,
    SafeHtmlPipe,
    WelcomeComponent,
    BenefitsComponent
    //PostComponent,
    //PostListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
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

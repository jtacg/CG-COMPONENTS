import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { RouterModule, Routes }    from '@angular/router';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AemService }              from './aem.service';

import { AppComponent }            from './app.component';
import { PrintFormComponent }      from './print-form/print-form.component';
import { BlankPageComponent }      from './blank-page/blank-page.component';
import { TopNavComponent }         from './top-nav/top-nav.component';
import { AemRequestComponent }     from './aem-request/aem-request.component';


const appRoutes: Routes = [
  { path: 'app-home', component: AppComponent },
  { path: 'blank-page', component: BlankPageComponent },
  { path: 'aem-request', component: AemRequestComponent },
  { path: 'print-form', component: PrintFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrintFormComponent,
    BlankPageComponent,
    TopNavComponent,
    AemRequestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [
    AemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

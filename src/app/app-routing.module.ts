import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PrintFormComponent }      from './print-form/print-form.component';
import { CompoundInterestChartComponent } from './shared/compound-interest-chart/compound-interest-chart.component';
import { BlankPageComponent }      from './blank-page/blank-page.component';
import { AemRequestComponent }     from './aem-request/aem-request.component';
import { WelcomeComponent }        from './welcome/welcome.component';
import { BenefitsComponent }       from './benefits/benefits.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'aem-request', component: AemRequestComponent },
  { path: 'print-form', component: PrintFormComponent },
  { path: 'compound-interest', component: CompoundInterestChartComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'blank-page', component: BlankPageComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  //{ path: 'post-component', component: PostComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

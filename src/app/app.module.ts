import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from '../../repo/mongo/app/customers/customers.component';
// import { app_routing } from './app.routing';
import { DataService } from '../../repo/mongo/app/shared/services/data.service';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/customers' },
      { path: 'customers', component: CustomersComponent }
    ]
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

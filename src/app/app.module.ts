import { NgModule } from '@angular/core';
//import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel, ngForm



import { AppComponent } from './app.component';
import { UrlForm } from '../app/components/url-form/url-form';
import { UrlList } from '../app/components/url-list/url-list';
import { UrlSearch } from '../app/components/url-search/url-search';
//import { UrlFormComponent } from './components/url-form/url-form.component';
//import { UrlFormComponent } from './components/url-form/url-form.component';


@NgModule({
  declarations: [
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
     UrlForm,
    UrlList,
    UrlSearch
  ],
  providers: [],
  //bootstrap: [UrlForm,UrlList,UrlSearch]
  //bootstrap: [AppComponent,UrlForm,UrlList,UrlSearch]
  bootstrap: [AppComponent]
})
export class AppModule { }

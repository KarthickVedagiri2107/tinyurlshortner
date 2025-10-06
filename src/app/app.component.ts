import { Component, OnInit,NgZone } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Url } from './/services/url'; 
//import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { UrlForm } from './components/url-form/url-form'; // 👈 Import the new component
import { UrlList } from './components/url-list/url-list'; // 👈 Import the new component
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel, ngForm

@Component({
  selector: 'app-root',
  standalone: true, // ✅ required
  imports: [UrlForm,UrlList], // ✅ only standalone components/modules here
  providers: [Url], // ✅ OR use @Injectable({ providedIn: 'root' })
  templateUrl: './app.component.html',
  
})

export class AppComponent implements OnInit {
  public static instance:AppComponent;
  public static Iauth:boolean;
  data: any;
  

  constructor(
    private urlService: Url,
    public readonly zone:NgZone
  ) {
    AppComponent.instance=this;
  }

 
    title = 'app works!';
    //this.Iauth
 
  
  ngOnInit(): void {
    this.urlService.getUrls().subscribe({
      next: (res) => {
        this.data = res;
        console.log('API response:', res);
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}







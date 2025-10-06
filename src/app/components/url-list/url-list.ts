import { Component,OnInit } from '@angular/core';
import { Url } from '../../services/url'; 
import { ShortUrl } from '../../models/url.model';
import { NgFor } from '@angular/common'; // ✅ Required for *ngFor
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngForm

@Component({
  selector: 'app-url-list',
  //imports: [NgFor],
  imports: [NgFor,FormsModule],
  standalone: true, // ✅ Required to be treated as standalone
  templateUrl: './url-list.html',

  styleUrl: './url-list.less'
})


export class UrlList implements OnInit  {
   url: ShortUrl[] = [];
   
constructor(private urlService: Url) {}
// Dummy example data to send as payload
  updatedUrl: ShortUrl = {
    id: 1,
    code:'',
    orginalURL: '',
    shortURL: '',
    totalClicks: 0,
    isPrivate: false,
  };


  ngOnInit(): void {
      this.loadUrls(); // 🔁 Initial load
  }

  // 🔄 GET logic in its own method
  loadUrls(): void {
    this.urlService.getUrls().subscribe({
      next: (res) => {
        this.url = res;
        console.log('API response:', res);
        console.log('Model response:', this.url);
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }

copy(id: number) {
  this.updatedUrl.id=id;

this.urlService.updateUrl(id, this.updatedUrl).subscribe({
      next: (res) => {
        console.log('✅ URL updated successfully:', res);
         this.loadUrls(); // 🔁 Initial load
        // optionally reload data or show toast
      },
      error: (err) => {
        console.error('❌ Error updating URL:', err);
      },
        });
}

copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      // You could add a toast notification here
      console.log('URL copied to clipboard');
    });
  }

deleteUrl(code: string) {

 this.urlService.deleteTodo(code ).subscribe({
      next: (res) => {
        console.log('Success:', res);
          this.loadUrls(); // 🔁 Initial load
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
}

}

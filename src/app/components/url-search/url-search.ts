import { Component,OnInit  } from '@angular/core';
import { Url } from '../../services/url'; 
import { ShortUrl } from '../../models/url.model';
import { NgFor } from '@angular/common'; // ✅ Required for *ngFor
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngForm

@Component({
  selector: 'app-url-search',
  imports: [NgFor,FormsModule],
  standalone: true, // ✅ Required to be treated as standalone
  templateUrl: './url-search.html',
  styleUrl: './url-search.less'
})

export class UrlSearch implements OnInit {
  url: ShortUrl[] = [];
  searchTerm=''
constructor(private urlService: Url) {}

ngOnInit(): void {
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

search() {
  //this.urlService.createShortUrl(this.url).subscribe();
}

get filteredUrls() {
    if (!this.searchTerm) {
      return this.url;
    }
    return this.url.filter(url => 
      url.orginalURL.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      url.shortURL.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

deleteUrl(id: number): void {
  console.log('Submitted with ID:', id);
}
}

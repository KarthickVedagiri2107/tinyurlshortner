import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
   
//import { Component, OnInit } from '@angular/core';
import { ApiService, Todo } from './Service/api.service'
import { BrowserModule } from '@angular/platform-browser';






//@Component({
 // selector: 'app-root',
  //standalone: true,
 // imports: [RouterOutlet, FormsModule, CommonModule],
 // templateUrl: './app.html',
 // styleUrls: ['./app.less']
//})




export class App {
  protected readonly title = signal('tiny-url-app');
  
  // Form properties
  urlInput: string = '';
  isPrivate: boolean = false;
  searchTerm: string = '';

  // Sample URLs data
  urls = [
    {
      id: 1,
      shortUrl: 'https://tiny-url-demo.azurewebsites.net/85676d',
      originalUrl: 'https://metamation.com',
      clicks: 10
    },
    {
      id: 2,
      shortUrl: 'https://tiny-url-demo.azurewebsites.net/c69235',
      originalUrl: 'https://trumpf.com',
      clicks: 10
    }
  ];

  get filteredUrls() {
    if (!this.searchTerm) {
      return this.urls;
    }
    return this.urls.filter(url => 
      url.originalUrl.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      url.shortUrl.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  generateShortUrl() {
    if (this.urlInput) {
      const newUrl = {
        id: this.urls.length + 1,
        shortUrl: `https://tiny-url-demo.azurewebsites.net/${this.generateRandomId()}`,
        originalUrl: this.urlInput,
        clicks: 0
      };
      this.urls.unshift(newUrl);
      this.urlInput = '';
    }
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      // You could add a toast notification here
      console.log('URL copied to clipboard');
    });
  }

  deleteUrl(id: number) {
    this.urls = this.urls.filter(url => url.id !== id);
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substr(2, 6);
  }
}

import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShortUrl } from '../models/url.model';
import { FormsModule } from '@angular/forms';
import { UrlForm } from '../components/url-form/url-form';

//import { URL } from 'url'; // Or just use a string for the URL

@NgModule({
      declarations: [
        // ... your components
      ],
      imports: [
        // ... other modules
        FormsModule,
      ],
      providers: [],
      bootstrap: []
    })

@Injectable({
  providedIn: 'root'
})
export class Url {

constructor(private http: HttpClient) { }
 
//https://localhost:44312/api/Tiny
//private apiUrl = 'https://localhost:44312/api/Tiny'; // json-server
private apiUrl = 'https://urlshortnerapi-d2egebd7baf8grce.canadacentral-01.azurewebsites.net/api/Tiny'; // json-server


getUrls(): Observable<ShortUrl[]> {
  return this.http.get<ShortUrl[]>(this.apiUrl);
  
}
// 🔽 Define a method that sends a POST request
  postData(payload: { orginalURL: string; isPrivate: boolean }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, payload);
  }

  deleteTodo(code: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${code}`);
  }
// PUT method: update a URL by ID
  updateUrl(id: number, payload: ShortUrl): Observable<ShortUrl> {
    return this.http.put<ShortUrl>(`${this.apiUrl}/${id}`, payload);
  }

  
}

import { Component } from '@angular/core';

import { Url } from '../../services/url'; 
import { FormsModule } from '@angular/forms'; // ✅ Required for ngForm





@Component({
  selector: 'app-url-form',
  standalone: true, // ✅ Required to be treated as standalone
  imports: [FormsModule],
  templateUrl: './url-form.html',
  providers: [Url], // ✅ OR use @Injectable({ providedIn: 'root' })
 // templateUrl: `<form> ... </form>`,
  styleUrl: './url-form.less'
})


export class UrlForm {

  constructor(private urlService: Url) {}


  url  = {
  orginalURL: '',
  isPrivate: false
};



submitUrl() {

  this.urlService.postData(this.url ).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Short URL created successfully!');
        window.location.reload();
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  
}


}



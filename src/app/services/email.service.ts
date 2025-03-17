import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://united1backend-ec1a5f2333e4.herokuapp.com/api/contactUs';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}

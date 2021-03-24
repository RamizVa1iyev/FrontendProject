import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailResponseModel } from '../models/detailResponseModel';
import { Login } from '../models/login';
import { TokenResponseModel } from '../models/tokenResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://localhost:44323/api/auth';
  constructor(private httpClient: HttpClient) {}
  login(user: Login): Observable<DetailResponseModel<TokenResponseModel>> {
    return this.httpClient.post<DetailResponseModel<TokenResponseModel>>(
      this.apiUrl + '/login',
      user
    );
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('token')!=null) {
      return true;
    } else {
      return false;
    }
  }
}

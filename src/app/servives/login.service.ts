import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // loginuser:boolean=false
  constructor(private router: Router, private http: HttpClient) {}


  logindata(postdata: any): Observable<any> {
    if (postdata) {
      console.log(postdata)
      this.setToken('1234567890');
      // return of({name:'shahnawaz',email:'shahnawaz786.iimt@gmail.com'})
      return this.http.get(`http://localhost:3000/logindata?number=${postdata.number}&email=${ postdata.email}`);
    } else {
      return throwError(new Error('fail login'));
    }
  }

//* signupdata//

  signupdata(postdata: any): Observable<any> {
    if (postdata) {
      this.setToken('1234567890');
      // return of({name:'shahnawaz',email:'shahnawaz786.iimt@gmail.com'})
      return this.http.post('http://localhost:3000/logindata',postdata);
    } else {
      return throwError(new Error('fail login'));
    }
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLogin() {
    return this.getToken() != null;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


//*messagedata*//

messagedata(msg:any):Observable<any>{
  return this.http.post('http://localhost:3000/msgdata',msg)
}




}

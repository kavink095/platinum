import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDTO} from '../dto/user-dto';
import {catchError} from 'rxjs/operators';

export const MAIN_URL = 'http://localhost:8084';
const urls = '/api/v1/user/register';
const URL = '/api/v1/user/gnNum';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  saveUser(user: UserDTO): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + urls, user);
  }
  updateOTP(id: number): Observable<boolean>{
    // @ts-ignore
    return this.http.put<boolean>(MAIN_URL + URL + '/' + id);
  }
}

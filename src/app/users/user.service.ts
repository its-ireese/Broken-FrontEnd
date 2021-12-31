
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  // getUserInfo(userId: number): Observable<user> {
  //   return this.http.get<user>(this.baseUrl+"/"+userId);
  // }

  // updateUser(currUser: user): Observable<user> {
  //   return this.http.put<user>(this.baseUrl, currUser);
  // }

}

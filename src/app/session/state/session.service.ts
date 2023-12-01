import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from './session.store';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  // login(_creds) {
  //   return this.http('endpoint').pipe(
  //     tap((user) => this.sessionStore.update(user))
  //   );
  // }

  public login() {
    this.http.post('', {}).pipe(
      tap((user: any) => {
        this.sessionStore.update(user);
      })
    );
  }
}

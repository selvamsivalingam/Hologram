import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StorageService, CacheKeys } from '../services/storage.service';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  baseUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient, private storageService: StorageService) { }

  login(model: any){
    return this.http.post(this.baseUrl+'login',model)
    .pipe(
      map((response: any)=>{
        const user = response;
        if(user){
          this.storageService.set(CacheKeys.AUTH_TOKEN, user.auth_token);
        }
      })
    )
  }
}

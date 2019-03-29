import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum CacheKeys {
  AUTH_TOKEN = 'auth-token',
  USER_NAME = 'user-name',
}

@Injectable()
export class StorageService {
  constructor() { }

  set(cacheKey: CacheKeys, value: any): void {
    try {
      localStorage.setItem(cacheKey, value);
    } catch (e) {}
  }

  get(cacheKey: CacheKeys): any {
    return localStorage.getItem(cacheKey);
  }

  clear(cacheKey: CacheKeys) {
    localStorage.removeItem(cacheKey);
  }

  clearCache(): void {
    Object.keys(CacheKeys)
      .map(item => CacheKeys[item])
      .forEach(key => localStorage.removeItem(key));
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';

export interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  static readonly BASE_URL = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) {}

  // TODO: username을 받아 github api를 이용해 검색하는 로직 작성
  searchUser(username: string): Observable<IUser[]> {
    const userApiUrl = GithubApiService.BASE_URL + username;
    return this.http.get<IUser[]>(userApiUrl).pipe(pluck('items'));
  }
}

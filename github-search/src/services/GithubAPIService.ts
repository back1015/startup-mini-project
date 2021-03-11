import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
    id: number
    login: string
    avatar_url: string
    html_url: string
}

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {
    static readonly BASE_URL = 'https://api.github.com';

    // TODO: username을 받아 github api를 이용해 검색하는 로직 작성
    searchUser(username: string): Observable<IUser[]> {
        return of<IUser[]>([]);
    }
}

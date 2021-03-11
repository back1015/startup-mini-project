import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { IUser } from '@src/services/GithubAPIService';
import { EState } from '@src/components/user-list/user-list.state';

@Component({
    templateUrl: './automatically-search.component.html',
    styleUrls: ['./automatically-search.component.scss'],
})
export class AutomaticallySearchComponent implements OnInit, OnDestroy {
    destroy$ = new Subject<void>();

    username = new FormControl('');
    state = EState.NeedUserName;
    users: IUser[] = [];

    // TODO: github api를 이용해 유저를 검색.
    searchUser$: Observable<IUser[]>;

    // TODO: search state를 변경시키는 스크림
    state$: Observable<EState>;

    ngOnInit() {
        // TODO: searchUser$, state$가 의도대로 동작하도록 초기화 필요.

        // this.state$.pipe(
        //     takeUntil(this.destroy$),
        // ).subscribe((state) => {
        //     this.state = state;
        // });

        // this.searchUser$.pipe(
        //     takeUntil(this.destroy$),
        // ).subscribe(
        //     (users) => {
        //         this.users = users;
        //         this.state = users.length === 0 ? EState.NoResult : EState.Success;
        //     },
        //     () => {
        //         this.state = EState.Error;
        //     },
        // );
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  share,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';

import { GithubApiService, IUser } from '@src/services/GithubAPIService';
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

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit(): void {
    const changeQuery$: Observable<string> = this.username.valueChanges;

    const userInput$ = changeQuery$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((v) => v.length > 0),
      share()
    );

    const searchUser$ = userInput$.pipe(
      switchMap((v) => this.githubApiService.searchUser(v).pipe()),
      share()
    );

    searchUser$.pipe(takeUntil(this.destroy$)).subscribe((users) => {
      this.users = users;
      this.state = EState.Success;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

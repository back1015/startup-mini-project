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
      filter((query) => query.length > 0),
      share()
    );
    const searchUser$ = userInput$.pipe(
      switchMap((query) => this.githubApiService.searchUser(query).pipe()),
      share()
    );

    searchUser$.pipe(takeUntil(this.destroy$)).subscribe(
      (users) => {
        this.users = users;
        this.state = EState.Success;
      },
      () => {}
    );

    /* const startSearching$ = changeQuery$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter((query) => query.length > 0),
      share()
    ); */
    /*
    const stopSearching$ = changeQuery$.pipe(
      filter((query) => query.length === 0),
      share()
    );


    merge<EState>(
      startSearching$.pipe(map(() => EState.Fetching)),
      stopSearching$.pipe(map(() => EState.NeedUserName))
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.state = state;
      });

    searchUser$.pipe(takeUntil(this.destroy$)).subscribe(
      (users) => {
        this.users = users;
        this.state = users.length === 0 ? EState.NoResult : EState.Success;
      },
      () => {
        this.state = EState.Error;
      }
    ); */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

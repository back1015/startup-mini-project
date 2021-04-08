import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { GithubApiService, IUser } from '@src/services/GithubAPIService';
import { EState } from '@src/components/user-list/user-list.state';

@Component({
  templateUrl: './manually-search.component.html',
  styleUrls: ['./manually-search.component.scss'],
})
export class ManuallySearchComponent {
  searchForm = new FormGroup({
    username: new FormControl(''),
  });
  state = EState.NeedUserName;
  users: IUser[] = [];

  constructor(private githubApi: GithubApiService) {}

  // TODO: github api를 이용해 user 검색이 성공했을 경우 처리
  handleNext(users: IUser[]) {}

  // TODO: github api를 이용해 user 검색이 실패했을 경우 처리
  handleError() {
    this.state = EState.Error;
  }

  // TODO: github api를 이용해 user 검색 실행
  handleSubmit() {
    this.state = EState.Fetching;
  }
}

import { Component, Input } from '@angular/core';

import { IUser } from '@src/services/GithubAPIService';
import { EState } from './user-list.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @Input() state = EState.NeedUserName;

  get EState() {
    return EState;
  }
}

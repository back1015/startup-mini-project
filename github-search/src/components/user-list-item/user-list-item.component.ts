import { Component, Input } from '@angular/core';

import { IUser } from '@src/services/GithubAPIService';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent {
  @Input() user: IUser;

  handleClickLink() {
    console.log(this.user);
    window.open(this.user.html_url);
  }
}

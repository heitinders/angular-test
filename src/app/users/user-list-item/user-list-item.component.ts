import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user: any;

  constructor() {}

  ngOnInit(): void {}
}

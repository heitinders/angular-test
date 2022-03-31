import { Component, OnInit } from '@angular/core';
import { UserData } from '../user.model';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData = {};
  constructor(private dataService: UserService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((resp) => {
      if (resp) {
        this.userData = resp;
        console.log(this.userData);
      }
    });
  }
}

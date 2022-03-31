import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserFilterPipe } from './user-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserListItemComponent,
    UserFilterPipe,
  ],
  imports: [CommonModule, HttpClientModule, MatExpansionModule, FormsModule],
})
export class UsersModule {}

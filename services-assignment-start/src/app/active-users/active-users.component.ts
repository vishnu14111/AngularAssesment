import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private personnelService: PersonnelService) {}

  ngOnInit() {
    this.users = this.personnelService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.personnelService.onSetToInactive(id);
  }
}

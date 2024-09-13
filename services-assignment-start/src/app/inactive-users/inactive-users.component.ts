import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private personnelService: PersonnelService) {}

  ngOnInit() {
    this.users = this.personnelService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.personnelService.onSetToActive(id);
  }
}

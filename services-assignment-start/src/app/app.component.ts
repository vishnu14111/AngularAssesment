import { Component } from '@angular/core';
import { PersonnelService } from './personnel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonnelService]
})
export class AppComponent {

}

import { Component } from '@angular/core';
import { MainRoutes } from '@shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	MainRoutes = MainRoutes;

}

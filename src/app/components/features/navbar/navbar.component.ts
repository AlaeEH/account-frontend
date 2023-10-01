import { Component } from '@angular/core';
import { AUTH_PATH, OVERVIEW_PAGE, PAGE_PATH } from "../../../constants/page";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  protected readonly AUTH_PATH = AUTH_PATH;
  protected readonly OVERVIEW_PAGE = OVERVIEW_PAGE;
  protected readonly PAGE_PATH = PAGE_PATH;
}

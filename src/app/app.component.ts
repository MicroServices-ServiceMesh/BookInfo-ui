import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bookinfo-ui';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit() {}

  logout() {
    this.keycloakService.logout();
  }
}

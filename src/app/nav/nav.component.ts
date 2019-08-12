import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoggin() {
    const url = `https://angular-amplify.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2ltae0r7timvffvabeu6od71cj&redirect_uri=http://localhost:4200`;
    window.location.assign(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService,private router: Router,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.login.logout();
    this.flashMessagesService.show('You are logged out', {cssClass:'alert-success',timeout:3000}) 
    this.router.navigate(['/login']);
    return false; 
  }
}

import { AddService } from './../services/add.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private add: AddService) { }

  ngOnInit() {
  }

}

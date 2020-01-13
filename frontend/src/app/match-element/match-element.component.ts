import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../Models/match';

@Component({
  selector: 'app-match-element',
  templateUrl: './match-element.component.html',
  styleUrls: ['./match-element.component.css']
})
export class MatchElementComponent implements OnInit {
  @Input() match : Match
  constructor() { }

  ngOnInit() {
  }

}

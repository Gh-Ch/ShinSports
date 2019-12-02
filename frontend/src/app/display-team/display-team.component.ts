import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';
import {Team} from '../Models/team';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  public teamId: number;
  public currentTeam: Team;
  private routeSub: Subscription;
  constructor(private displayService : DisplayService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      this.teamId = params['id']; 
      this.displayService.getTeam(this.teamId).subscribe((team)=>{
        this.currentTeam=team;
      })
    })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayService } from '../services/display.service';
import {Player} from '../Models/player';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit,OnDestroy {
  public playerId: number;
  public currentPlayer: Player;
  private routeSub: Subscription;
  constructor(private displayService : DisplayService , private route: ActivatedRoute) {
   }
 
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      this.playerId = params['id']; 
      this.displayService.getPlayer(this.playerId).subscribe((player)=>{
        this.currentPlayer=player;
      })
    })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}

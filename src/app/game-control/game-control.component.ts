import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  lastNumber =0;

  ngOnInit() {

  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }
}

import { Component } from '@angular/core';
import { Userr } from './userr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:Userr;

  title = 'MyMovies';
  constructor(){
    this.user=new Userr;
  }
  
}

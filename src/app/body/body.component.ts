import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceeService } from '../servicee.service';
import { TestservService } from '../testserv.service';
import { Userr } from '../userr';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  user:Userr[]=[];
  user1:Userr;

  constructor(private router:Router, private testserv:TestservService, private serviceserv:ServiceeService) {
    this.user1=new Userr();
   }

  ngOnInit(): void {
  }
  submit(){
    alert("Sign up successfully");
    this.router.navigate(['/Login']);
    this.serviceserv.save(this.user1).subscribe((result)=>{

    });
      
  
  }

  getallusersinformation(){
    this.testserv.getallusers().subscribe(user=>{
      this.user=user;

    });
  }

  // putt
  
  putusersinfo(){
    this.testserv.putusers().subscribe(user=>{
      this.user=user;
    });
  }
}

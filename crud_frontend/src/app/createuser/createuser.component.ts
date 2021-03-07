import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../Services/userdata.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  user: User=new User();
  id:number;
  constructor(private userdataservice: UserdataService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  this.id=this.route.snapshot.params['id'];
  this.userdataservice.getUserbyId(this.id).subscribe(data=>{
    this.user=data;
    console.log(this.user)
  })
  }

  public onSubmit()
  {
    this.userdataservice.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['users'])
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../Services/userdata.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:User[]; 
  constructor(private userdataservice: UserdataService,
    private router:Router,
    private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.getUsers();
  }

  private getUsers()
  {
    this.userdataservice.getuserList().subscribe(data=>{
      this.users=data;
      console.log(this.users)
    })
  }

  updateUser(id:number)
  {
    this.router.navigate(['/updateuser',id])
  }

  deleteUser(id:number)
  {
    this.userdataservice.deleteUserbyId(id).subscribe(data=>{
      this.getUsers();
    })
  }

  viewUser(id:number)
  {
    this.router.navigate(['viewdetails',id])
  }

}

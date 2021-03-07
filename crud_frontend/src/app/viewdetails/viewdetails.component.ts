import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../Services/userdata.service';
import { User } from '../user';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private userdataservice: UserdataService) { }
  user:User;
  id:number;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.userdataservice.getUserbyId(this.id).subscribe(data=>
      {
        this.user=data
      })
  }

}

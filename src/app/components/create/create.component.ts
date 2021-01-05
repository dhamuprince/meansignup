import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private personForm:FormGroup;
  private newCreated:any;
  private diserror:any;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      lastName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    age:new FormControl(''),
    dob:new FormControl(''),
    email:new FormControl('',[Validators.required])
            
    });
  }

  

  //create new customer and insert into the database
  public create(user):any{

// console.log('userrrrrr', this.personForm);
    this.userservice.createcustom(user.value).subscribe(res=>{
      //  console.log('ressss', res);
      this.newCreated = res;
      // console.log(this.newCreated);
      
    },error=>{
      console.error(error);
      this.diserror = error.message;
    })
  }


}

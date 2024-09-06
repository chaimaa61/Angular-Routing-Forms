import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
name:String=''
email:String=''
applyForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
})
submitApplication(name:String,email:String){
  console.log(name,email)
}

}

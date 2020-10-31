import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  students : any[];
  msg = "";
  found=false;
  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
    this.msg="";
  }

  deleteStudent(stdId : String)
  {
    console.log(stdId);
    this.found = false;
    this.service.getStudent().subscribe(res => {
      this.students = res;

      for (var s of this.students) {
        if (s.studentId == stdId) {
          this.service.deleteStudent(stdId).subscribe(res => { });
          this.msg = "Student has been removed successfully";
          this.found = true;
          break;
        }
      }
    });
    
    if(this.found == false)
      this.msg = "No such student has been registered!";
    
  }

}

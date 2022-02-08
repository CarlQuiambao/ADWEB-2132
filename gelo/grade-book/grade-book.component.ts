import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-book',
  templateUrl: './grade-book.component.html',
  styleUrls: ['./grade-book.component.css']
})
export class GradeBookComponent {
  name = '';
  subject = '';
  prelim = 0;
  midterm = 0;
  final = 0;

  display = "compute grade";


  getName(namedata:any){
    this.name = namedata;
  }
  
  getSubject(subdata:any){
    this.subject = subdata;
  }

  getPrelim(prelimdata:any){
    this.prelim = prelimdata;
  }
  getMidterm(midtermdata:any){
    this.midterm = midtermdata;
  }

  getFinal(finaldata:any){
    this.final = finaldata;
  }

  DisplayName= '';
  DisplaySubject= '';
  DisplayPrelim= 0;
  DisplayMidterm= 0;
  DisplayFinal= 0;
  DisplayAveg= 0;

  displayGrade($event:any){
    if ($event) {
      this.DisplayName = this.name;
      this.DisplaySubject = this.subject;
      this.DisplayPrelim = this.prelim;
      this.DisplayMidterm = this.midterm;
      this.DisplayFinal = this.final;
      this.DisplayAveg = (+this.prelim + +this.midterm + +this.final) / 3;
}
    }
  }

  

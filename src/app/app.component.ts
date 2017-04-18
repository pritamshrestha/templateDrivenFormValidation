import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
studentsName= [];
studentsFirstName = '';
  studentsLastName = '';
addStudentName() {
    this.studentsName.push({
      type: 'client',
      name: this.studentsFirstName,
      content: this.studentsLastName
    });
  }

  onAddBlueprint() {
    this.studentsName.push({
      type: 'server',
      name: this.studentsFirstName,
      content: this.studentsLastName
    });
}
  

public name="Priyasi shrestha";
public imageLink="https://img.clipartfox.com/035b2c9bac23f1d8362e625faecef63d_hansika-hot-images-actress-south-heroines-hot-clipart_620-799.jpeg"
 
public apply=true;

public applystyle=false;

getavalue(value){
console.log(value);
}
public fname;
public lname;

public elementShow=true;
public mycolor='red';
public names=['pritam','suchana','prisumsa','priyanka','prakash','pratima','prashrit'];

public cone=true;
public ctwo=true;
public myName="pritamshrestha";
public number=35;

public date=new Date();
}
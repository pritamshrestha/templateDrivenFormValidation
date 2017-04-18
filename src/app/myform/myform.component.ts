import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
onSubmit(value:any){

console.log(value)
}
myName="pritam shrestha"


  constructor() { }

  ngOnInit() {
  }

}

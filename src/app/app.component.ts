import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import {AppService} from './app.service';

/*const PERSON: Person[] = [
  {firstName: "John", lastName: "Bag", age: 35},
  {firstName: "Bill", lastName: "Alex", age: 25},
  {firstName: "Mark", lastName: "Berd", age: 15},
  {firstName: "Stiv", lastName: "Yang", age: 45}
];*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DataTable component in spreadsheet mode';
  persons: Person[]=[{}]; //PERSON;
  cols: any[];
  selectedRow: Person;
  val: Person;
  result: Person[];
 
  firstName: string;
  lastName: string;
  age: number;

  constructor(private appService: AppService) {}

  ngOnInit(){ }

  search(event :any, nameField:string) {
    //console.log(event);
      let query = event.query;  
      this.appService.search(query, nameField).subscribe(
              (v) => {this.result = v;}
          )
  }

  getData(event: any){
      //console.log(JSON.stringify(event));
      //this.selectedRow = event;
      //console.log(this.selectedRow.entId);
      this.lastName = event.lastName;
      console.log(this.lastName);
  }

  deleteRow(e: any, ri:any){
    //console.log(ri);
    //let index = this.persons.indexOf(ri);
    //console.log(this.persons.length);
    this.persons = this.persons.filter((val, i) => i!=ri);
    //this.persons.splice(index, 1);
    console.log(this.persons.length);
  }

  addRow(){
    let person = [...this.persons];
    let b = new Person();
    b.firstName = "Tommy";
    b.lastName = "lie";
    b.age = 50;
    person.push(b);
    this.persons = person;
  }

  onRowClick(e: any){
    //console.log(e.data);
  }

  onEditInit(e: any){
    //console.log(e.data);
    //console.log(e.column);
  }

  onEdit(e: any) {
    //console.log(e.originalEvent);
    //console.log(e.data);
    //console.log(e.index);
  }

  onEditComplete(e: any){
/*    console.log(e.column);
    console.log(e.data;
    console.log(e.data.firstName);
    console.log(e.index);*/
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DataTable component in spreadsheet mode';
  persons: Person[]=[{}]; //PERSON;
  result: Person[];
  currentCol: number;
  currentRow: number = 0;
  selectedRow: any;

  constructor(private appService: AppService) {}

  ngOnInit(){  }

  onGetItem(p: Person){
    //console.log('onGetItem' + JSON.stringify(p));
    /*let person = [...this.persons];
    person.push(p);
    this.persons = person;*/
    //console.log(p, this.currentRow);
    let person =  [...this.persons];
    person[this.currentRow] = p;
    this.persons = person;
    //console.log(this.persons);
  }

  onInput(ri: number){
    console.log('ri= '+ri);
    this.currentRow = ri;
  }
  onClick(ri: number){
    console.log('ri= '+ri);
  }
  deleteRow(e: any, ri:any){
    console.log(ri);
    //let index = this.persons.indexOf(ri);
    //console.log(this.persons.length);
    this.persons = this.persons.filter((val, i) => i!=ri);
    //this.persons.splice(index, 1);
    //console.log(this.persons.length);
  }

  addRow(){
    let person = [...this.persons];
    let b = new Person();
/*    b.firstName = "Tommy";
    b.lastName = "lie";
    b.age = 50;*/
    person.push(b);
    this.persons = person;
  }

  onRowClick(e: any){
    //console.log(e.data);
    //console.log(this.selectedRow);
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
    console.log(e.index);*/
    //console.log(e.data.firstName);
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import {AppService} from './app.service';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DataTable component in table mode with drop-down selector';
  persons: Person[]=[];
  selectedRow: Person;
  selectedType: string;
  types: SelectItem[];
  myValue: any = '';

  constructor(private appService: AppService) {
    this.types = [];
    this.types.push({label:'First Name', value:'firstName'});
    this.types.push({label:'Last Name', value:'lastName'});
    this.types.push({label:'Age', value:'age'});
    this.selectedType = this.types[0].value;
  }

  ngOnInit(){  }

  onGetItem(p: Person){
    //console.log('onGetItem' + JSON.stringify(p));
    let person = [...this.persons];
    person.push(p);
    this.persons = person;
    switch (this.selectedType) {
      case 'firstName':
        this.myValue = p.firstName
        break;
      case 'lastName':
          this.myValue = p.lastName
          break;
      case 'age':
          this.myValue = p.age
          break;          
      default:
        this.myValue = p.firstName
        break;
    }
  }

  searchTerm(e: any, b: any){
    //console.log(e, b);
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
    //console.log(e);
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
  onRowSelect(e: any){
    //console.log(e);
    console.log(e.data);
  }
}

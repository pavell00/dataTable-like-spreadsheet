import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AppService} from '../app.service';
import { Person } from '../person';

@Component({
  moduleId: module.id,
  selector: 'select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.css']
})
export class SelectDialogComponent implements OnInit {

  displayDialog: boolean;
  persons: Person[] = [];
  selectedPerson: Person;
  result_length: number = 0;
  index: number = 0;

  @Output() myEvent: EventEmitter<Person> = new EventEmitter();
  

  constructor(private appService: AppService) { }

  ngOnInit() { }

  onSelect(p: Person, i: number){
    this.selectedPerson = p;
    this.index = i;
  }

  ngAfterViewInit(){}

  keydown(e: any){
    //console.log(e.code)
    switch (e.code) {
      case 'ArrowUp':
        if (this.index > 0) {
          this.index--
          this.selectedPerson = this.persons[this.index]
        }  
        break;
      case 'ArrowDown':
        if (this.index < this.result_length-1) {
          this.index++
          this.selectedPerson = this.persons[this.index]
        }  
        break;
      case 'Enter':
        this.ClickOk();
        this.close();
        break;
      default:
        break;
    }
  }

  ClickOk(){
    if(this.selectedPerson !== undefined){
      this.myEvent.emit(this.selectedPerson);
    }
  }

  onOpenDlg(term: string, field: string){
    //console.log(term, field);
    if(term !== undefined && term !== '' && term.length >= 2){
      //console.log('onOpenDlg' + JSON.stringify(e.data));
      this.search(term, field);
      //console.log(this.result_length);
      if(this.result_length !== 0) {
          this.displayDialog = true;
          this.result_length = 0;
      } else {
        alert("Ничего не найдено!");
      }
    }
  }
  
  close(){
    this.index = 0;
    this.displayDialog = false
  }

  search(term :string, nameField:string) {
    this.appService.search(term, nameField).subscribe(
        (v) => {this.persons = v;
                this.result_length = this.persons.length;
                this.selectedPerson = this.persons[0];},
        (error) => (console.log(error)),
        () => true
    )
  }
}

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
  result_length: number=0;

  @Output() myEvent: EventEmitter<Person> = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {}

  onSelect(p: Person){
    //console.log(p);
    this.selectedPerson = p;
  }

  yesClick(){
    if(this.selectedPerson !== undefined){
      this.myEvent.emit(this.selectedPerson);
    }
  }

  onOpenDlg(e: any){
    //console.log(Object.keys(e));
    //console.log(e.column.field);
    let term: any = e.data[e.column.field];
    if(term !== undefined && term !== ''){
      //console.log('onOpenDlg' + JSON.stringify(e.data));
      this.search(term, e.column.field);
      //console.log(this.result_length);
      if(this.result_length !== 0) {
          this.displayDialog = true;
          this.result_length = 0;
      } else {
        alert("Ничего не найдено!");
      }
    }
  }
  
  close(){this.displayDialog = false}

  search(term :string, nameField:string) {
    //let b = await this.getReslength();
 
        this.appService.search(term, nameField).subscribe(
            (v) => {this.persons = v;
                    this.result_length = this.persons.length;},
            (error) => (console.log(error)),
            () => true
        )
  }
}

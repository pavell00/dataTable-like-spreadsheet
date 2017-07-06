import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AppService} from '../app.service';
import { Entities } from '../Entities';

@Component({
  selector: 'select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.css']
})
export class SelectDialogComponent implements OnInit {

  displayDialog: boolean;
  entities: Entities[] = [];
  selectedEntities: Entities;
  selectedValues: string[] = [];
  result_length: number = 0;
  index: number = 0;
  selectedRow: any;

  @Output() myEvent: EventEmitter<Entities> = new EventEmitter();
  
  constructor(private appService: AppService) { }

  ngOnInit() { }

  onRowSelect(e: any){
    //console.log(e.data);
  }

  onChange(e: any, i: any, v: any){console.log(e, i);}

  onRowClick(e: any){console.log(e.data);}

  onSelect(p: Entities, i: number){
    this.selectedEntities = p;
    this.index = i;
  }

  ngAfterViewInit(){}

  keydown(e: any){
    //console.log(e.code)
    switch (e.code) {
      case 'ArrowUp':
        if (this.index > 0) {
          this.index--
          this.selectedEntities = this.entities[this.index]
        }
        break;
      case 'ArrowDown':
        if (this.index < this.result_length-1) {
          this.index++
          this.selectedEntities = this.entities[this.index]
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
    if(this.selectedEntities !== undefined){
      this.myEvent.emit(this.selectedEntities);
    }
  }

  onOpenDlg(term: string, field: string){
    //console.log(term, field);
    if(term !== undefined && term !== '' && term.length >= 1){
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
        (v) => {this.entities = v;
                this.result_length = this.entities.length;
                this.selectedEntities = this.entities[0];},
        (error) => (console.log(error)),
        () => true
    )
  }
}

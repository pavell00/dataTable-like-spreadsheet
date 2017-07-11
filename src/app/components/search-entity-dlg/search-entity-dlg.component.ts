import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Entities } from '../../model/entities';

@Component({
  selector: 'search-entity-dlg',
  templateUrl: './search-entity-dlg.component.html',
  styleUrls: ['./search-entity-dlg.component.css']
})
export class SearchEntityComponent implements OnInit {

  displayDialog: boolean;
  entities: Entities[] = [];
  selectedEntities: Entities;
  selectedValues: string[] = [];
  result_length: number;
  index: number = 0;
  selectedRow: any;
  private date;
  private bFlag: boolean = false;

  @Output() myEvent: EventEmitter<Entities> = new EventEmitter();
  
  constructor(private appService: AppService) { }

  ngOnInit() { this.date = new Date(); }

  onRowSelect(e: any){
    //console.log(e.data);
  }

  onChange(e: any, i: any, v: any){console.log(e, i);}

  onRowClick(e: any){console.log(e.data);}

  onSelect(p: Entities, i: number){
    //console.log(p, i);
    this.selectedEntities = p;
    this.index = i;
  }

  keydown(e: any){
    //console.log(e.key)
    switch (e.key) {
      case 'ArrowUp':
        if (this.index > 0) {
          this.index--
          this.selectedEntities = this.entities[this.index]
          this.bFlag = true;
        }
        break;
      case 'ArrowDown':
        if (this.index < this.result_length-1) {
          this.index++
          this.selectedEntities = this.entities[this.index]
          this.bFlag = true;
        }
        break;
      case 'Enter':
        if (this.bFlag === true) { //костыль от самосрабатывания окна поиска ?
          this.ClickOk();
          this.close();
          this.bFlag = false;
        }
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

  onOpenDlg(e: any, term: string, field: string){
    //console.log(e.target.id, term, field);
    if(e.key === 'Enter' && e.target.name === 'searchEntity') {
      if(term !== undefined && term !== '' && term.length >= 1){
        this.search(term, field);
        if(this.result_length !== 0) {
            this.displayDialog = true;
        } else {
          alert("Ничего не найдено!");
          //console.log('not find')
        }
        this.result_length = 0;
      }
    }
  }
  
  close(){
    this.index = 0;
    this.displayDialog = false
  }

  search(term :string, nameField:string) {
    this.appService.searchEntity(term, nameField).subscribe(
        (v) => {this.entities = v;
                this.result_length = this.entities.length;
                this.selectedEntities = this.entities[0];},
        (error) => (console.log(error)),
        () => true
    )
  }
}

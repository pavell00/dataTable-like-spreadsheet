import { Component, OnInit, ViewChild } from '@angular/core';
import { Entities } from './entities';
import { AppService } from './app.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DataTable component in table mode with drop-down selector';
  entities: Entities[]=[];
  selectedType: string;
  types: SelectItem[];
  myValue: any = '';
  selectedRowNo: number = -1;

  displayDialog: boolean;
  find_entities: Entities[] = [];
  selectedEntities: Entities;
  selectedValues: string[] = [];
  result_length: number = 0;
  index: number = 0;
  selectedRow: any;

  constructor(private appService: AppService) {
    this.types = [];
    this.types.push({label:'Имя ОУ', value:'ent_name'});
    this.types.push({label:'Nom №', value:'ent_nom'});
    this.types.push({label:'ID', value:'ent_id'});
    this.selectedType = this.types[0].value;
  }

  ngOnInit(){ }

  onGetItem(p: Entities){
    let entity = [...this.entities];
    if (this.selectedRowNo == -1) {
        entity.push(p);

    } else {
        entity[this.selectedRowNo] = p;
        this.selectedRowNo = -1;
    }
    this.entities = entity;
    switch (this.selectedType) {
        case 'ent_nom':
          this.myValue = p.ent_nom
          break;
        case 'ent_name':
            this.myValue = p.ent_name
            break;
        default:
          this.myValue = p.ent_name
          break;
    }
  }

  onRowEdit(ri: number, rd: any){
    //console.log(ri, rd);
    this.selectedRowNo = ri;
    let entity = this.entities[ri];
    switch (this.selectedType) {
      case 'ent_nom':
        this.myValue = entity.ent_nom
        break;
      case 'ent_name':
          this.myValue = entity.ent_name
          break;
      default:
        this.myValue = entity.ent_name
        break;
    }
  }

  deleteRow(e: any, ri:any){
    console.log(ri);
    //let index = this.entities.indexOf(ri);
    //console.log(this.entities.length);
    this.entities = this.entities.filter((val, i) => i!=ri);
    //this.entities.splice(index, 1);
    //console.log(this.entities.length);
  }

  addRow(){
    let entity = [...this.entities];
    let b = new Entities();
/*    b.firstName = "Tommy";
    b.lastName = "lie";
    b.age = 50;*/
    entity.push(b);
    this.entities = entity;
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
/*  console.log(e.column);
    console.log(e.data;
    console.log(e.index);*/
    //console.log(e.data.firstName);
  }

  searchTerm(e: any, b: any){
    //console.log(e, b);
  }

  onClick(ri: number){
    console.log('ri= '+ri);
  }

  //------------------------
  onSelect(p: Entities, i: number){
    this.selectedEntities = p;
    this.index = i;
  }

  ClickOk(){
    if(this.selectedEntities !== undefined){
      //this.myEvent.emit(this.selectedEntities);
      this.onGetItem(this.selectedEntities);
    }
  }

  onOpenDlg(e: any, term: string, field: string){
    //console.log(term, field);
    if (e.key === 'Enter'){
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
  }

  search(term :string, nameField:string) {
    this.appService.search(term, nameField).subscribe(
        (v) => {this.find_entities = v;
                this.result_length = this.find_entities.length;
                this.selectedEntities = this.find_entities[0];},
        (error) => (console.log(error)),
        () => true
    )
  }

  close(){
    this.index = 0;
    this.displayDialog = false
  }

  keydown(e: any){
    //console.log(e.key)
    switch (e.key) {
      case 'ArrowUp':
        if (this.index > 0) {
          this.index--
          this.selectedEntities = this.find_entities[this.index]
        }
        break;
      case 'ArrowDown':
        if (this.index < this.result_length-1) {
          this.index++
          this.selectedEntities = this.find_entities[this.index]
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

}

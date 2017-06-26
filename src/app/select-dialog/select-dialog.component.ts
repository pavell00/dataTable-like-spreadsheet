import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../app.service';
import { Person } from '../person';

@Component({
  moduleId: module.id,
  selector: 'select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.css']
})
export class SelectDialogComponent implements OnInit {

  @Input() searchTerm: string;
  @Input() fieldTerm: string;

  displayDialog: boolean;
  result: Person[]=[];

  constructor(private appService: AppService) { }

  ngOnInit() {

  }

  onOpenDlg(e: any){
    //console.log(Object.keys(e));
    //console.log(e.column.field);
    let term: any = e.data[e.column.field];
    if(term !== undefined && term !== ''){
      console.log('onOpenDlg' + JSON.stringify(e.data));
      this.search(term, e.column.field);
      this.displayDialog = true;
    }
  }
  
  close(){this.displayDialog = false}

  search(term :string, nameField:string) {
    //console.log(event);
    this.appService.search(term, nameField).subscribe(
            (v) => {this.result = v;}
        )
  }
}

import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { PriceLists } from '../../model/priceLists';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'doc-no-date',
  templateUrl: './doc-no-date.component.html',
  styleUrls: ['./doc-no-date.component.css']
})
export class DocNoDateComponent implements OnInit {

  private docNo: string = 'б/н';
  private docName: string = 'накладная';
  private docDate: string;
  private items: PriceLists[] = [];
  private selectedItem: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    let d = new Date();
    let s: string;
    let DayNo: string = d.getDate().toString();
    if (d.getDate() < 10) DayNo = '0' + d.getDate().toString();
    let MontNo: string = d.getMonth().toString();
    if (d.getMonth() < 9) MontNo = '0' + d.getMonth().toString();
    s = d.getFullYear().toString();
    s = s +'-' + MontNo;
    s = s +'-' + DayNo + 'T';
    s = s + d.getHours().toString()+':';
    s = s + d.getMinutes().toString()+':';
    s = s + d.getSeconds().toString();
    //console.log(s);
    this.docDate = s;
    this.getPeceListDropDown();
  }

  getPeceListDropDown(){
    this.appService.getPriceLists().subscribe(
        (v) => {this.items = v},
        (error) => (console.log(error)),
        () => true
    )
  }

}

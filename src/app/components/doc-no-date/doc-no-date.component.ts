import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-no-date',
  templateUrl: './doc-no-date.component.html',
  styleUrls: ['./doc-no-date.component.css']
})
export class DocNoDateComponent implements OnInit {

  private docNo: string = 'б/н';
  private docName: string = 'накладная';
  private docDate: string;

  constructor() { }

  ngOnInit() {
    let d = new Date();
    let s: string;
    s = d.getFullYear().toString();
    s = s +'-0' + d.getMonth().toString();
    s = s +'-' + d.getDate().toString()+'T';
    s = s + d.getHours().toString()+':';
    s = s + d.getMinutes().toString()+':';
    s = s + d.getSeconds().toString();
    console.log(s);
    this.docDate = s;//d.toLocaleDateString();
    //"2017-07-12T16:30:00"//new Date().getFullYear();
  }

}

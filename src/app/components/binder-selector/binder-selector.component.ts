import { Component, OnInit } from '@angular/core';
import { Binders } from '../../model/binder';
import { AppService } from '../../services/app.service';
import { Logger } from "angular2-logger/core";

@Component({
  selector: 'binder-selector',
  templateUrl: './binder-selector.component.html',
  styleUrls: ['./binder-selector.component.css']
})
export class BinderSelectorComponent implements OnInit {

  private displayDialog: boolean;
  private linkBinders: Binders[];
  private BinderName: string;
  
  private binders: Binders[] = [];
  private currentTrgAgName: string;
  private selectedBinder: Binders;
  private index: number = 0;
  private result_length: number;
  private bFlag: boolean = false;

  constructor(private appService: AppService,
              private _logger: Logger) { }

  ngOnInit() {
  }

  clearSearch(e: string, a: string){
/*     if (e === ''){
      this._logger.info(a);
      if (a === 'searchAgentTo') {
        this.AgTo = undefined;
        this.AgToName = '';
      }
      if (a === 'searchAgentFrom') {
        this.AgFrom = undefined;
        this.AgFromName = '';
      }
    } //this._logger.info('handler search!') */
  }

}

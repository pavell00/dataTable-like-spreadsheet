import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { BinderSelectorComponent } from '../binder-selector/binder-selector.component';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  @ViewChild(BinderSelectorComponent) private bsc: BinderSelectorComponent;

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

      this.items = [
                  {
                      label: 'Новый',
                      icon: 'fa-file-o',
                      //routerLink: ['change'],
                      command: () => this.test('New')
                  }, {
                      label: 'Сохранить',
                      icon: 'fa-floppy-o',
                      disabled: true
                  }, {
                      label: 'Закрыть',
                      icon: 'fa-times'
                  }, {
                      label: 'Печать',
                      icon: 'fa-print',
                      items: [
                                {label: 'Печать в PDF',
                                    icon: 'fa-file-pdf-o',
                                    command: () => this.test('Печать в PDF')},
                                {label: 'Накладная ДНР',
                                    icon: 'fa-print',
                                    command:  () => this.test('Накладная ДНР')},
                              ]
                  }, {
                      label: 'Проводки',
                      icon: 'fa-list-ol',
                      command: () => this.test('Проводки')
                  }, {
                      label: 'Шаблоны',
                      icon: 'fa-clipboard',
                      command: () => this.test('Шаблоны')
                  }, {
                      label: 'Связи',
                      icon: 'fa-link',
                      command: () => this.test('Связанные')
                  }, {
                      label: 'Подшивки',
                      icon: 'fa-thumb-tack',
                      command: () => this.bsc.addBinders()
                  }];
  }

  test(e: any){
    console.log('command! ', e);
  }

}
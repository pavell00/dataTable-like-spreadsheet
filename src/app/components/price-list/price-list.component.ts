import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { PriceLists, Price } from '../../model/priceLists';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  private pricelists: SelectItem[];
  private items: PriceLists[] = [];
  private selectedPriceList: PriceLists;
  private prices: SelectItem[];
  private selectedPrice: SelectItem;

  constructor(private appService: AppService) { }

  ngOnInit() {
        this.getPeceListDropDown();
  }

  getPeceListDropDown(){
    this.appService.getPriceLists().subscribe(
        (v) => {this.items = v;
                this.pricelists = [];
                v.forEach(element => {
                  this.pricelists.push({label: element.prl_name, value:{prl_id:element.prl_id, prices:element.prices}})
                });
                //Initionalize dropdown's
                this.selectedPriceList = this.items[0];
                this.onChangePriceLists();
                this.selectedPrice = this.prices[0];
        },
        (error) => (console.log(error)),
        () => true
    )
  }

  onChangePriceLists(){
    this.prices = [];
    let o = this.selectedPriceList.prices;
    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        var element = o[key];
        this.prices.push({label:element.prc_name, value:{prc_id: element.prc_id}})
      }
    }
    this.selectedPrice = this.prices[0]; //Initionalize price dropdown
  }

  getInfo(){
        console.log('selectedPriceList', this.selectedPriceList);
        console.log('selectedPrice', this.selectedPrice);
  }

}

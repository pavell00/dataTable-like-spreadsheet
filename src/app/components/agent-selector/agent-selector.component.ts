import { Component, OnInit } from '@angular/core';
import { Agents } from '../../model/agent';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'agent-selector',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.css']
})
export class AgentSelectorComponent implements OnInit {

  AgTo: Agents;
  AgFrom: Agents;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onOpenDlg(e: any){
    if (e.key === 'Enter'){
      if (e.target.name === 'searchAgentTo'){
        console.log(e.target.name, this.AgTo);
      }
      if (e.target.name === 'searchAgentFrom'){
        console.log(e.target.name, this.AgFrom);
      }
    }
  }

  searchAgent(term :string, nameField:string) {
/*    this.appService.searchAgent(term, nameField).subscribe(
        (v) => {this.entities = v;
                this.result_length = this.entities.length;
                this.selectedEntities = this.entities[0];},
        (error) => (console.log(error)),
        () => true
    )*/
  }

}

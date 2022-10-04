import { Component, OnInit, Input } from '@angular/core';
import { HangBlock } from './hang-block.model';

@Component({
  selector: 'div[app-hang-block]',
  templateUrl: './hang-block.component.html',
  styleUrls: ['./hang-block.component.scss'],
  host: {
    class: 'text-white'
  }
})
export class HangBlockComponent implements OnInit {
  @Input() optionalClass: string | undefined;
  @Input() spaceClass: string | undefined;
  @Input() selectedHangs: HangBlock;
  constructor() { 
    this.selectedHangs = {
      addAsterisk: false,
      addDagger: false,
      addDoubleDagger: false,
      addPara: false,
      addSect: false,
      addLines: false,
      addAccording: false,
      addBased: false,
      Observational: false,
      addLines2: false,
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'div[app-survey-modal]',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.scss'],
  host: {
    id: 'surveyModal',
    class: 'modal fade',
    tabindex: '-1',
    ariaLabelledby: 'surveyModalLabel',
    ariaLabel: 'true'
  }
})
export class SurveyModalComponent implements OnInit {

  firstEntry = false

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let modalRef = document.getElementById('surveyModal')
    if(modalRef){
      modalRef.addEventListener('hidden.bs.modal',  (event) => {
        this.firstEntry = true
      })
    }
  }

}

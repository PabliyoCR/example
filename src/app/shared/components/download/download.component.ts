import { Component, OnInit, Input } from '@angular/core';
import { DOWNLOAD } from './download.model';

@Component({
  selector: 'div[app-download]',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  host: {
    class: 'card text-center'
  }
})
export class DownloadComponent implements OnInit {
  @Input() datos: DOWNLOAD;
  constructor() { 
    this.datos = {
      icon: '',
      title: '',
      url: ''
    }
   }

  ngOnInit(): void {
  }

}

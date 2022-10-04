import { Component, OnInit, Input } from '@angular/core';
import { Picture } from './picture.model';

@Component({
  selector: 'picture[app-picture]',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() data: Picture = {
    image: '',
    webp: false,
    altext: '',
    format: '',
    // Optional below
    // mobile: boolean,
    // width: string,
    // height: string,
     classes: '',
    // id: string
  };

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
  }




}

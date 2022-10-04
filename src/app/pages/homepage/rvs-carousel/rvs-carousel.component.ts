import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'section[app-rvs-carousel]',
  templateUrl: './rvs-carousel.component.html',
  styleUrls: ['./rvs-carousel.component.scss'],
  host: {
    id: 'rvs-carousel',
  },
})
export class RvsCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('dot1') dot1!: ElementRef;
  @ViewChild('dot2') dot2!: ElementRef;

  @ViewChild('video1') video1!: ElementRef;
  @ViewChild('video2') video2!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.playVideo(this.video1);
  }

  changeVideo(event: any) {
    if (event.target.classList.contains('dot')) {
      const {
        bsSlideTo,
        bsTarget
      } = event.target.dataset;

      if (bsSlideTo === '0') {
        this.playVideo(this.video1);
      } else {
        this.playVideo(this.video2);
      }
    }
  }

  changeSlide(slide: number) {
    switch (slide) {
      case 1:
      default:
        this.dot1.nativeElement.click();
        break;
      case 2:
        this.dot2.nativeElement.click();
        break;
    }
  }

  playVideo(video: ElementRef): void {
    video.nativeElement.currentTime = 0;
    video.nativeElement.play();
  }
}

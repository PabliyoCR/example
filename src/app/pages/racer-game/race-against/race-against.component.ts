import { Component, OnInit, Inject, AfterViewInit, PLATFORM_ID, OnDestroy } from '@angular/core';
import { Icons } from './icons.model';
import { gsap } from "gsap";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'section[app-race-against]',
  templateUrl: './race-against.component.html',
  styleUrls: ['./race-against.component.scss'],
  host: {
    class: 'bg-light',
    id: 'race'
  }
})
export class RaceAgainstComponent implements OnInit, AfterViewInit, OnDestroy {
  data: Icons[];
  private interval: any = null;
  private currentSlide: number = 0;
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformid: any) {
    this.data = [
      {
        text: 'Collect as many objects as you can in 60 seconds while avoiding viruses, sneezy siblings, and germy toys!',
        picture: {
          image: 'racer-game/race-against/icon-1',
          format: '',
          altext: 'Bear prize',
          webp: true,
          mobile: false,
          classes: '',
          width: '90',
          height: '90'
        }
      },
      {
        text: 'Answer RSV-related questions <br class="d-none d-md-inline"/>correctly to fast-forward <br class="d-none d-md-inline"/>and stay ahead of the virus!',
        picture: {
          image: 'racer-game/race-against/icon-2',
          format: '',
          altext: 'Game quiz moderator',
          webp: true,
          mobile: false,
          classes: '',
          width: '90',
          height: '90'
        }
      },
      {
        text: 'Viral obstacles can be unpredictable, so stay alert <br>and good luck!',
        picture: {
          image: 'racer-game/race-against/icon-3',
          format: '',
          altext: 'Viral obstacle ',
          webp: true,
          mobile: false,
          classes: '',
          width: '90',
          height: '90'
        }
      }
    ]
  }

  ngOnInit(): void {
    // this.goToSlide('0');
    // this.activateDot('0');
  }

  ngAfterViewInit() {
    // if (isPlatformBrowser(this.platformid)) {
    //   this.interval = setInterval(() => {
    //     this.goToSlide(String(this.currentSlide));
    //     this.activateDot(String(this.currentSlide));
    //     if (this.currentSlide < 2) {
    //       this.currentSlide++;
    //     } else {
    //       this.currentSlide = 0;
    //     }
    //   }, 4000);
    // }
  }

  ngOnDestroy(): void {
    // if (this.interval) {
    //   clearInterval(this.interval);
    // }
  }


  changeImage(event: any) {
    if (event.target.classList.contains('dots__dot')) {
      const {
        slide
      } = event.target.dataset;
      // console.log(slide)
      this.goToSlide(slide);
      this.activateDot(slide);
    }
  }

  goToSlide(slide: string) {
    this.updateCurrentSlide(slide);
    const slides: NodeList = this.document.querySelectorAll('.carousel-item');
    //console.log(slides);
    slides.forEach((s, i) => {
      (s as HTMLElement).style.transform = `translateX(${100 * (i - Number(slide))}%)`;
      //console.log(`translateX(${100 * (i - Number(slide))}%)`);
    });
  }

  activateDot(slide: string) {
    this.document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    //document.querySelectorAll('.carousel-item').forEach(dot => dot.classList.remove('active'));
    this.document.querySelector(`.dots__dot[data-slide="${slide}"]`)?.classList.add('dots__dot--active');
    //document.querySelector(`.carousel-item--${slide}`)?.classList.add('active');
  }

  handleSwipe(slide: string) {
    this.goToSlide(slide);
    this.activateDot(slide);
  }


  updateCurrentSlide(slide: string) {
    this.currentSlide = +slide;
  }

  reloadIframe() {
      const iFrame: any = document.getElementById('gameIFrame');
      iFrame.src += '';
  }


}

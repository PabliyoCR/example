import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'section[app-all-infants]',
  templateUrl: './all-infants.component.html',
  styleUrls: ['./all-infants.component.scss'],
  host: {
    id: 'all-infants'
  }
})
export class AllInfantsComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef | undefined;
  @ViewChild('.placeholder') placeholder: ElementRef | undefined;
  videoTranscript!: string;
  isVideoPlaying: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.videoTranscript = `
      <p><strong>Robert Chanock:</strong></p>
      <p class="mb-4">Good evening. I’m Robert Chanock. This just in: Groups of empowered infants all over the country have taken to the streets. They have a message for us about the unpredictability of severe infection caused by respiratory syncytial virus, commonly called “RSV”. And why is this group, named ‘The Voice of All Infants’, trying to bring to our attention the unpredictability of RSV? Let’s go live to a pediatrician at the scene. We have Doctor Crosby in the Big Apple.</p>

      <p><strong>Dr. Crosby:</strong></p> 
      <p class="mb-4">You don’t see this every day. Coming to work, I saw this poster going up on a big billboard, then I noticed there were infants putting it up. I was shocked! But their message was powerful: Most RSV hospitalizations in children under 5 are infants, including those otherwise healthy and born at term.</p>

      <p><strong>Robert Chanock:</strong></p>
      <p class="mb-4">Thank you, New York. Now we head to sunny Florida, where Dr. Perez is standing by in Miami. Dr. Perez…</p>

      <p><strong>Dr. Perez:</strong></p>
      <p class="mb-4">I’m shocked! This is unbelievable, seeing a giant carriage on the street. And I swear, it was being driven by infants! But what stood out most was the message—that RSV is the leading cause of hospitalization for infants under 12 months. That’s a statement I won’t forget.</p>

      <p><strong>Robert Chanock:</strong></p> 
      <p class="mb-4">Thank you, Dr. Perez. As we said, this all-infant voice is coming in from across the country. Let’s go to the west coast, in Seattle, where we’re live with community pediatrician, Dr. Jones.</p>

      <p><strong>Dr. Jones:</strong></p>
      <p class="mb-4">I couldn’t believe my eyes. Infants were controlling a crane, raising a giant mobile above the hospital. RSV is on our minds when the season starts, especially for vulnerable infants, but seeing that mobile made me realize that the risk from RSV applies to ALL infants, whether they’re premature, have health issues, or are born at term with no underlying conditions.</p>

      <p><strong>Robert Chanock:</strong></p>
      <p class="mb-0">ALL infants across the country, driven by the need to raise awareness about RSV, creating a voice for themselves is unbelievable. But what’s more unpredictable than that is their takeaway: That, in their first season, ALL infants are potentially at risk from RSV. Now, that’s news to be heard.</p>
    `;
  }

  playVideo(): void {
    this.videoplayer?.nativeElement.play();
    gsap.set('.placeholder', { display: 'none' });
    gsap.set(this.videoplayer?.nativeElement, { display: 'block' });
    this.isVideoPlaying = true;
  }

  closeVideo() {
    this.videoplayer?.nativeElement.pause();
    (this.videoplayer?.nativeElement as HTMLVideoElement).currentTime = 0;
    gsap.set('.placeholder', { display: 'block' });
    gsap.set(this.videoplayer?.nativeElement, { display: 'none' });
    this.isVideoPlaying = false;
  }

}

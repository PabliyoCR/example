import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'section[app-experts-discuss]',
  templateUrl: './experts-discuss.component.html',
  styleUrls: ['./experts-discuss.component.scss'],
  host: {
    id: 'experts-discuss'
  }
})
export class ExpertsDiscussComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef | undefined;
  @ViewChild('.placeholder') placeholder: ElementRef | undefined;
  isVideoPlaying: boolean = false;
  videoTranscript!: string;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.videoTranscript = `
      <p><strong>Dr Domachowske:</strong></p>
      <p class="mb-4">I’m Dr. Joseph Domachowske. I’m a pediatric infectious disease specialist and Professor of Pediatrics at Upstate Medical University in Syracuse, New York.</p>

      <p><strong>Dr Fergie:</strong></p>
      <p class="mb-4">My name is Jaime Fergie. I am the Director of Pediatric Infectious Diseases at Driscoll Children’s Hospital in Corpus Christi, Texas.</p>

      <p><strong>Dr Domachowske:</strong></p>
      <p class="mb-4">As pediatricians, we dread cold and flu season because we know RSV is going to reappear. It’s predictable that way from an epidemiologic standpoint.
      But it’s unpredictable in the way that it affects each individual. We don’t know which term healthy newborn is going to end up with a little bit of a cold and recover after a couple days, and which term newborn that’s totally healthy otherwise is going to progress to lower respiratory tract infection, bronchiolitis, pneumonia, require oxygen, come into the hospital and maybe even need transfer to our ICU.</p>

      <p><strong>Dr Fergie:</strong></p>
      <p class="mb-4">The majority of the babies who end up in the hospital with RSV infection are previously healthy babies, babies who were born with no prematurity, no underlying condition, no congenital heart disease, they never developed chronic lung diseases of prematurity. And they represent about 72% of all the hospitalization for RSV. Really, it is unpredictable in that sense. We don’t know the reason why some of these babies are going to become so sick with RSV, even though they had no underlying problems. Something that people find very surprising, some of my colleagues find very surprising is that when you look at infants who are hospitalized, there are about 16 times more infants hospitalized with RSV than there are with influenza, any given season.</p>

      <p><strong>Dr Domachowske:</strong></p>
      <p class="mb-4">So when we hospitalize an individual patient with RSV infection, we don’t know which ones of those children are going to need escalation of their care for RSV. Once they’re in the hospital, once they’ve developed a severe enough infection with RSV to require hospitalization, about 1 in 4 will end up in the ICU for more advanced care. So it’s unpredictable in that manner.</p>

      <p><strong>Dr Fergie:</strong></p>
      <p class="mb-4">Our current pandemic with COVID-19 has really caused a significant change in the seasonality of RSV. You know, to begin with, I’d like to go back to the fact that when at the beginning of the pandemic, RSV went away the same as influenza went away. It was very interesting, it looked like all those measures we were taking to prevent COVID-19 work in preventing RSV, so that the typical late autumn, winter, early spring season of RSV went away.</p>

      <p><strong>Dr Domachowske:</strong></p>
      <p class="mb-4">But as those restrictions became a bit more relaxed, this happened first in the southern hemisphere in Australia, they were the first to report that there was this surge in RSV as the social distancing relaxed a bit, people stopped wearing masks and were basically out in the community more. What they described was a surge of infection, not just in the young infants, but now extending into the toddler ages, because we had an 18-month period where none of those kids were exposed or infected. So we started experiencing that also in the United States, in the southern area, in the southern states first. And then gradually by the end of this summer of this year 2021, we started seeing a surge in RSV cases even in upstate New York in Syracuse, where we never see RSV hospitalizations in the summertime.</p>

      <p><strong>Dr Fergie:</strong></p>
      <p class="mb-4">Just this summer, I saw a baby 3-month-old who came through the emergency room. He was a full term infant who developed RSV disease, and when he came to the emergency room required some supplemental oxygen, so he went to the hospital ward and the child had no underlying illness that we could figure out. We thought it was going to be a normal short hospitalization, but actually it turned for the worse and the child began to require more oxygen and it reached a point in which we had to call the intensive care unit team to take the child to the ICU and required intubation, mechanical ventilation, was there for 5 days until he recovered. But it was completely unexpected.</p>

      <p><strong>Dr Domachowske:</strong></p>
      <p class="mb-4">This was a family who I’d known for a long time. They had 6-year-old twins and they had a 3-year-old and James was the new addition. He was born very, very late in the summertime. By that November, he was 3 or 4 months old. He got exposed to RSV probably from one of the other kids in the household. And his mom brought him in, we did a quick test and confirmed it was RSV. And I gave her some advice about what to bring him back for, or to call me about, should this progress.
      Well, sure enough, in 24 hours, he had progressed to lower respiratory tract infection with bronchiolitis and an oxygen requirement. So he was hospitalized that day to the general pediatric ward. I went in to see him. He needed a little bit of extra oxygen. He certainly had bronchiolitis. He was wheezing like crazy. And his siblings years earlier had done just fine. They just got a cold and recovered. But James was extra naughty because later that day, he was breathing so fast that he actually went into respiratory failure, got transferred to the intensive care unit, and placed on mechanical ventilation. And it happened within a day and a half. So it was a very quick progression, very unpredictable. Thankfully James was on the ventilator for just a couple of days. He improved fairly quickly. Overall, he was in the hospital for about a week, went home, and now he’s a healthy young child. So it’s a great outcome to what was a very scary event, both for the parents and for the people taking care of him.</p>
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

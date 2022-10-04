import { BackFace } from './back-face.model';

export interface FlipCard {
  frontTitle: string;
  imgAltText : string;
  back: BackFace;
}
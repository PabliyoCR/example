import { Links } from '../../models/links.model';

export interface Card {
  title: string;
  titleClass?: string;
  text?: string;
  button: Links;
  modal?: string;
}
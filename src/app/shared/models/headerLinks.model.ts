import { Links } from "./links.model";

export interface HeaderLinks {
  text: string;
  url: string;
  fragment?: string;
  classes: string;
  dropdown?: boolean;
  dropdownItems?: Links[];
}

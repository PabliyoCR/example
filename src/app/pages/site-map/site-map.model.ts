import { Links } from "src/app/shared/models/links.model";

export interface SiteMap {
  text: string,
  href: boolean,
  url: string,
  fragments?: Links[]
}
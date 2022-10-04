import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { catchError } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';
import { ErrorHandler } from '../../models/error.model';
import { RECORD } from './record.model';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

export interface APIResponse {
  message: string;
  result: string;
}


@Injectable({
  providedIn: 'root',
})
export class FormService {
  // private apiURL = environment.apiURL;
  private errorHandler = new ErrorHandler();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformid: any
  ) {}

  get apiURL(): string {
    let url: string = '';
    if (isPlatformBrowser(this.platformid))
      url = `${window.location.protocol}//${window.location.hostname}/`;
    return url;
  }

  sendRecord(data:any) {
    console.log('sendRecord', `${this.apiURL}api/register/getUpdate`, data);
    return this.http
      .post(`${this.apiURL}api/register/getUpdate`, data, {
        observe: 'response',
      })
      .pipe(catchError(this.errorHandler.handleError));
  }
}

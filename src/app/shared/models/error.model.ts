import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorHandler {
  constructor() { }
  public handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.error.message || 'An unknown error occurred!';
    return throwError(errorMessage);
  }
}
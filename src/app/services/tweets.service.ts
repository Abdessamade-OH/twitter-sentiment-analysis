import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetBrute } from '../interfaces/tweetBrute.interface';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  apiURL = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => fetch tweets list
  getTweets(): Observable<TweetBrute[]> {
    return this.http
      .get<TweetBrute[]>(this.apiURL + '/getTweets')
      .pipe(retry(1), catchError(this.handleError));
  }

  getTweetsNomral() {
    return this.http.get(this.apiURL + '/getTweets').toPromise(); 
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

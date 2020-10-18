import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {share, catchError, shareReplay} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public get(path: string, params?: any, headers?: any): Observable<any> {
    return this.http.get(path.includes('swapi.dev') ? path : `${environment.api_url}${path}`, {params, headers})
      .pipe(
        shareReplay(),
        catchError((error: any) => this.handleError(error))
      );
  }

  public post(path: string, params?: any, options?: any): Observable<any> {
    const requestParams = Object.assign({}, params);
    return this.http.post(`${environment.api_url}${path}`, requestParams, options);
  }

  public postFormData(path: string, formData: FormData, options?: any): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, formData, options);
  }

  public put(path: string, params?: any): Observable<any> {
    const requestParams = Object.assign({}, params);
    return this.http.put(`${environment.api_url}${path}`, requestParams);
  }

  public patch(path: string, params?: any): Observable<any> {
    const requestParams = Object.assign({}, params);
    return this.http.patch(`${environment.api_url}${path}`, requestParams);
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`);
  }

  private handleError = (error: any) => {
    if (error.status) {
      alert('error'); // TODO
    }
    return throwError(error);
  }

}

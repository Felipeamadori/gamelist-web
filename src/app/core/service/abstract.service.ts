import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export class AbstractService {

   protected http: HttpClient;
   public headers: HttpHeaders;

   public readonly API_URL = environment.urls.api;

   constructor(http: HttpClient) {
      this.http = http;
   }
}

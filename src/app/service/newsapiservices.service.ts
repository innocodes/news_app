import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=26e8675d304c44669477c37028713bc5"

  //technewsapiUrl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=26e8675d304c44669477c37028713bc5"


  //businessewsapiUrl
  // businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=26e8675d304c44669477c37028713bc5"
  businessApiUrl = "https://newsdata.io/api/1/news?apikey=pub_11687eab369eb0d3eaedd09895035f89a084b&country=au,ca&category=sports,health"

  //topHeading()

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //techNews()

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //businessNews()

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }


}

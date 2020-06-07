import { Injectable,Inject } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) {}

  public makeRequest(url):Promise<any>{
    return this.http.get(url,{ responseType:'text'}).toPromise()
      .then((value)=>{
        console.log(value)
        return value;
      })
      .catch((error)=>{
        return error;
      })
  }
}

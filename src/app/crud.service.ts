import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface obj
{

    id: number,
    name: string,
    clas: string,
    course: {
      coursename: string,
      outof: number,
      result: number
    }

}
interface Model
{

    "id": number,
    "name": string,
    "clas":string,
    "course":{"coursename":string,"outof":number,"result":number}
}
export interface mod extends Array<Model>{}
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
url="http://localhost:3000/Student"
getdata():Observable<mod>
{
  return this.http.get<mod>(this.url)
}
postdata(post:object)
{
return this.http.post(this.url,post)
}
deletedata(id:any):Observable<mod>
{
  return this.http.delete<mod>(this.url+'/'+id)
}
getdatabyid(id:any):Observable<obj>
{
  return this.http.get<obj>(this.url+'/'+id)
}
updatedata(id:any,updated:any):Observable<mod>
{
  return this.http.put<mod>(this.url+'/'+id,updated)
}

}

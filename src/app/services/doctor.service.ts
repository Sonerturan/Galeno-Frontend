import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Doctor } from '../models/doctor';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = 'https://api.galeno.com.tr/api/';

  constructor(private httpClient: HttpClient) {}

  getDoctors(): Observable<ListResponseModel<Doctor>> {
    let newPath=this.apiUrl+"doctors/getall"
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath);
  }
  getDoctor1s(){
    return this.httpClient.get("https://api.galeno.com.tr/api/doctors/getall");
  }

  // getDoctorsByCity(cityId:number): Observable<ListResponseModel<Doctor>> {
  //   let newPath=this.apiUrl+"doctors/getallbycityid?cityid="+cityId
  //   return this.httpClient.get<ListResponseModel<Doctor>>(newPath);
  // }

  // add(doctor:Doctor):Observable<ResponseModel>{
  //   return this.httpClient.post<ResponseModel>(this.apiUrl+"doctors/add",doctor)
  // }
}

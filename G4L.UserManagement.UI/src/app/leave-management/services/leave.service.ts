import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LeaveTypes } from 'src/app/shared/global/leave-types';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) {
  }

  applyForLeave(value: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/leave`, value);
  }

  getLeaveApplications(userId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/leave/${userId}`);
  }

  getLeaveToApprove(userId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/leave/approve/${userId}`);
  }

  updateLeave(leave: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/leave/${leave?.id}`, leave);
  }

  getLeaveStats(userId: any){
    return this.http.get(`${environment.apiUrl}/leave/approverBalance/${userId}`);
  }

  getLeaveBalances(userId: any) {
    return this.http.get(`${environment.apiUrl}/leave/balances/${userId}`);
  }

  uploadAttachments(value: any) : Observable <any> {

     return this.http.post(`${environment.apiUrl}/leave/Post_Attachments`, value);
  }

  getAttachments(leave: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/leave/Get_Attachments/${leave?.Id}`);
  }

  updateLeaveRequest(value: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/leave`, value);
  }

  getApproverByStream(userId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/leave/approverByStream/${userId}`);
  }
}

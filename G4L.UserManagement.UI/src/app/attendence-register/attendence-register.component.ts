import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { CaptureGoalsComponent } from './capture-goals/capture-goals.component';
import { LunchTimeNotificationComponent } from './lunch-time-notification/lunch-time-notification.component';
import { ReviewGoalsComponent } from './review-goals/review-goals.component';
import { contants } from '../shared/global/global.contants';
import { Roles } from '../shared/global/roles';



@Component({
  selector: 'app-attendence-register',
  templateUrl: './attendence-register.component.html',
  styleUrls: ['./attendence-register.component.css']
})
export class AttendenceRegisterComponent implements OnInit {

  modalDialog: MdbModalRef<CaptureGoalsComponent> | null = null;
  modalRef: any;
  time= new Date();
  today= new Date();
  todaysDataTime = '';
 

  constructor(
    private modalService: MdbModalService,
    private toastr: ToastrService,
  
  ) { }

  isAdmin: boolean | undefined;
  isTrainer: boolean | undefined;
  isLearner: boolean | undefined;
 

  ngOnInit(): void {
    const role = sessionStorage.getItem(contants.role);
    this.determinRole(role);
  }
  determinRole(role: string | null) {
    switch (role) {
      case Roles.Super_Admin:
      case Roles.Admin:
        this.isAdmin = true;
        break;
      case Roles.Trainer:
        this.isTrainer = true;
        break;
      case Roles.Learner:
        this.isLearner = true;
        break;
    }

    
   
  }


 
}

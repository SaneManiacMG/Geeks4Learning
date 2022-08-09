import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  heading = 'register works!';
  faAngle = faAngleRight;
  formModel: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('User').subscribe((response: any) => {
      console.log(response);
    });

    this.formModel = this.fb.group({
      Name: ['Moses', Validators.required],
      Surname: ['Shilenge', Validators.required],
      IdNumber: ['9403027147088', Validators.required],
      Phone: ['0813477619', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      Email: ['ushilmo@gmail.com', Validators.required],
      Client: ['ABSA', Validators.required],
      Career: ['', Validators.required],
      Roles: ['', Validators.required],
      LearnershipStartDate: ['2022-12-05', Validators.required],
      Password: ['P@ssword1', Validators.required],
    });
  }

  register(form: any) {
    console.log(form.get('Name'));

    this.formModel.markAllAsTouched();

    // Hack needs to be removed at some point. FIND BETTER WAY, US PIPE IF NEEDS BE!!!!
    this.formModel.get('Career').patchValue(Number(this.formModel.get('Career').value));
    this.formModel.get('Roles').patchValue(Number(this.formModel.get('Roles').value));

    if (this.formModel.invalid) {
      return;
    }

    this.apiService.post('User', this.formModel.value).subscribe((response: any) => {
      console.log(response);
    });


  }

}

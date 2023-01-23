import { UsermanagementComponent } from './usermanagement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnrolComponent } from './enrol/enrol.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MaterialModule } from '../shared/material/material.module';
import { IconsComponent } from './login/icons/icons.component';
import { FooterComponent } from './login/footer/footer.component';

@NgModule({
  declarations: [
    UsermanagementComponent,
    LoginComponent,
    RegisterComponent,
    EnrolComponent,
    IconsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbModalModule,
    PipesModule,
    MaterialModule
  ],
})
export class UsermanagementModule {}

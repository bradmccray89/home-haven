import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgIconsModule } from '@ng-icons/core';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { PropertyDialogComponent } from './components/property-dialog/property-dialog.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PropertyTableComponent } from './components/property-table/property-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    PropertyDialogComponent,
    SignupComponent,
    ForgotPasswordComponent,
    PropertyTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      toastClass: 'ngx-toastr rounded-md',
      messageClass: 'border-l pl-3',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

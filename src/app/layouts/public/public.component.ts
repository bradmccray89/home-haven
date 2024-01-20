import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.authService.isSignedIn.value) {
      this.authService
        .signOut()
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log(error);
          this.toastr.error(error.message);
          if (error.name === 'UserUnauthenticatedException') {
            return;
          }
        });
    }
  }
}

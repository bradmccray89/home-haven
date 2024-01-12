import { Injectable } from '@angular/core';
import {
  signIn,
  type SignInOutput,
  signUp,
  type SignUpOutput,
  signOut,
} from 'aws-amplify/auth';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.isSignedIn.next(localStorage.getItem('isSignedIn') === 'true');
    localStorage.removeItem('isSignedIn');
  }

  signUp(username: string, password: string): Promise<SignUpOutput> {
    return signUp({ username, password });
  }

  signIn(username: string, password: string): Promise<SignInOutput> {
    return signIn({ username, password });
  }

  signOut(): Promise<void> {
    this.isSignedIn.next(false);
    return signOut();
  }
}

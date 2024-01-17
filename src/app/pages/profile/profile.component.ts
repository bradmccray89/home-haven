import { Subscription } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userProfile: any;
  profileForm!: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('uid');
    if (!userId) return;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  setProfileForm() {
    const form = new FormGroup({
      firstName: new FormControl(this.userProfile.firstName),
      lastName: new FormControl(this.userProfile.lastName),
      email: new FormControl(this.userProfile.email),
      phone: new FormControl(this.userProfile.phone),
      address: new FormControl(this.userProfile.address),
      city: new FormControl(this.userProfile.city),
      state: new FormControl(this.userProfile.state),
      zip: new FormControl(this.userProfile.zip),
    });
    return form;
  }
}

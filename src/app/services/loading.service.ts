import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _initialLoading = new BehaviorSubject(true);
  public initialLoading = this._initialLoading.asObservable();
  private _loading = new BehaviorSubject(false);
  public loading = this._loading.asObservable();

  constructor() {}

  public setLoading(loading: boolean) {
    this._loading.next(loading);
  }

  public setInitialLoading(loading: boolean) {
    this._initialLoading.next(loading);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Using BehaviorSubject to store the state and emit changes
  private sidebarVisible = new BehaviorSubject<boolean>(true);

  // Observable for other components to subscribe to
  sidebarVisible$ = this.sidebarVisible.asObservable();

  // Method to toggle sidebar visibility
  toggleSidebar(): void {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  // Method to set sidebar visibility explicitly
  setSidebarVisibility(isVisible: boolean): void {
    this.sidebarVisible.next(isVisible);
  }
}

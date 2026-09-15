import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isMobileOpenSubject = new BehaviorSubject<boolean>(false);
  public isMobileOpen$: Observable<boolean> = this.isMobileOpenSubject.asObservable();

  private isCollapsedSubject = new BehaviorSubject<boolean>(false);
  public isCollapsed$: Observable<boolean> = this.isCollapsedSubject.asObservable();

  get isMobileOpen(): boolean {
    return this.isMobileOpenSubject.value;
  }

  constructor() {
    this.isMobileOpen$.subscribe(open => {
      try {
        if (open) {
          document.body.classList.add('mobile-nav-open');
        } else {
          document.body.classList.remove('mobile-nav-open');
        }
      } catch (e) { /* SSR or test guard */ }
    });
  }

  get isCollapsed(): boolean {
    return this.isCollapsedSubject.value;
  }

  public toggleMobile(): void {
    this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value);
  }

  public openMobile(): void {
    this.isMobileOpenSubject.next(true);
  }

  public closeMobile(): void {
    this.isMobileOpenSubject.next(false);
  }

  public toggleCollapse(): void {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }

  public setCollapsed(collapsed: boolean): void {
    this.isCollapsedSubject.next(collapsed);
  }
}

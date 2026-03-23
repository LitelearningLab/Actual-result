import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  mobileMenuOpen = false;
  showBackToTop = false;
  currentYear = new Date().getFullYear();

  private mainScroll: HTMLElement | null = null;

  ngOnInit(): void {
    this.mainScroll = document.querySelector('.main-scroll');
    this.mainScroll?.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll(): void {
    this.showBackToTop = (this.mainScroll?.scrollTop ?? 0) > 400;
  }

  scrollToTop(): void {
    this.mainScroll?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 640) {
      this.mobileMenuOpen = false;
    }
  }
}

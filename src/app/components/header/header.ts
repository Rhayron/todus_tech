import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;
  isDarkTheme = false;
  private themeSubscription?: Subscription;

  dropdownStates: { [key: string]: boolean } = {
    sobre: false,
    servicos: false
  };

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkTheme$.subscribe(
      isDark => this.isDarkTheme = isDark
    );
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(dropdown: string, state: boolean) {
    this.dropdownStates[dropdown] = state;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

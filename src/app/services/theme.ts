import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  public isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    this.loadThemeFromStorage();
    this.applyTheme();
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkTheme.value;
    this.isDarkTheme.next(!currentTheme);
    this.saveThemeToStorage(!currentTheme);
    this.applyTheme();
  }

  setDarkTheme(isDark: boolean): void {
    this.isDarkTheme.next(isDark);
    this.saveThemeToStorage(isDark);
    this.applyTheme();
  }

  private applyTheme(): void {
    const isDark = this.isDarkTheme.value;
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  private saveThemeToStorage(isDark: boolean): void {
    localStorage.setItem('todus-tech-theme', isDark ? 'dark' : 'light');
  }

  private loadThemeFromStorage(): void {
    const savedTheme = localStorage.getItem('todus-tech-theme');
    if (savedTheme) {
      this.isDarkTheme.next(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkTheme.next(prefersDark);
    }
  }
}

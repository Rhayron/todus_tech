import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Footer } from './components/footer/footer';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Services, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'TodusTech';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Theme service is automatically initialized
  }
}

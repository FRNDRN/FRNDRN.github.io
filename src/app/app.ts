import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopAppBar } from './layout/top-app-bar/top-app-bar';
import { BottomNav } from './layout/bottom-nav/bottom-nav';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [RouterOutlet, TopAppBar, BottomNav, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { AbdelrahmanCv } from './components/abdelrahman-cv/abdelrahman-cv';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, AbdelrahmanCv, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortofolio');
}

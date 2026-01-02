import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateForm } from "../components/translate-form/translate-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('translate-app');
}

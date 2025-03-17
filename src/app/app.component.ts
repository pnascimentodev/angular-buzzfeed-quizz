import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizComponent],
  template: `
    <app-quiz></app-quiz>
  `
})
export class AppComponent {
  title = 'Quiz: Você seria um Gato ou um Cachorro?';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizComponent],
  template: `
    <div class="app-container">
      <app-quiz></app-quiz>
    </div>
  `,
  styles: [`
    .app-container {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'Quiz: Você seria um Gato ou um Cachorro?';
}

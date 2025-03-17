import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuizComponent {
  perguntas = [
    {
      questao: 'Como você prefere passar seu tempo livre?',
      respostas: [
        { texto: 'Dormindo em lugares confortáveis', pontos: 'gato' },
        { texto: 'Brincando e correndo ao ar livre', pontos: 'cachorro' },
        { texto: 'Observando o movimento pela janela', pontos: 'gato' },
        { texto: 'Interagindo com outras pessoas/animais', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Qual é sua atitude em relação a estranhos?',
      respostas: [
        { texto: 'Preciso de um tempo para me aproximar', pontos: 'gato' },
        { texto: 'Amo conhecer pessoas novas imediatamente', pontos: 'cachorro' },
        { texto: 'Prefiro manter distância', pontos: 'gato' },
        { texto: 'Quero fazer amizade com todo mundo', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Como você reage a barulhos altos?',
      respostas: [
        { texto: 'Me escondo imediatamente', pontos: 'gato' },
        { texto: 'Corro para ver o que está acontecendo', pontos: 'cachorro' },
        { texto: 'Fico em alerta, observando', pontos: 'gato' },
        { texto: 'Começo a fazer barulho também', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Qual sua comida favorita?',
      respostas: [
        { texto: 'Peixe fresco', pontos: 'gato' },
        { texto: 'Qualquer coisa que me derem', pontos: 'cachorro' },
        { texto: 'Apenas comidas premium', pontos: 'gato' },
        { texto: 'Adoro petiscos e guloseimas', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Como você demonstra afeto?',
      respostas: [
        { texto: 'Gosto de ficar próximo, mas sem muito contato', pontos: 'gato' },
        { texto: 'Pulo de alegria e dou muitos beijos', pontos: 'cachorro' },
        { texto: 'Aproximo-me quando quero carinho', pontos: 'gato' },
        { texto: 'Sempre quero estar no colo ou perto', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Qual sua rotina preferida?',
      respostas: [
        { texto: 'Dormir de dia, ativo à noite', pontos: 'gato' },
        { texto: 'Ativo durante o dia todo', pontos: 'cachorro' },
        { texto: 'Vários cochilos ao longo do dia', pontos: 'gato' },
        { texto: 'Seguir a rotina dos humanos', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Como você lida com água?',
      respostas: [
        { texto: 'Prefiro evitar', pontos: 'gato' },
        { texto: 'Amo nadar e brincar na água', pontos: 'cachorro' },
        { texto: 'Só quando necessário', pontos: 'gato' },
        { texto: 'Adoro dias de chuva', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Qual seu lugar favorito em casa?',
      respostas: [
        { texto: 'Lugares altos com boa visão', pontos: 'gato' },
        { texto: 'Onde minha família está', pontos: 'cachorro' },
        { texto: 'Cantinhos escondidos e tranquilos', pontos: 'gato' },
        { texto: 'Na porta, esperando visitas', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'Como você reage quando está feliz?',
      respostas: [
        { texto: 'Ronrono baixinho', pontos: 'gato' },
        { texto: 'Abano o rabo e pulo de alegria', pontos: 'cachorro' },
        { texto: 'Mostro sutilmente meu contentamento', pontos: 'gato' },
        { texto: 'Demonstro para todo mundo ver', pontos: 'cachorro' }
      ]
    },
    {
      questao: 'O que você faz quando quer algo?',
      respostas: [
        { texto: 'Espero pacientemente até notarem', pontos: 'gato' },
        { texto: 'Faço de tudo para chamar atenção', pontos: 'cachorro' },
        { texto: 'Dou sinais sutis do que quero', pontos: 'gato' },
        { texto: 'Peço insistentemente até conseguir', pontos: 'cachorro' }
      ]
    }
  ];

  perguntaAtual = 0;
  respostas: string[] = [];
  resultado: string | null = null;

  selecionarResposta(pontos: string) {
    this.respostas.push(pontos);
    
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
    } else {
      this.calcularResultado();
    }
  }

  calcularResultado() {
    const gatos = this.respostas.filter(r => r === 'gato').length;
    const cachorros = this.respostas.filter(r => r === 'cachorro').length;
    
    this.resultado = gatos > cachorros ? 'gato' : 'cachorro';
  }

  reiniciarQuiz() {
    this.perguntaAtual = 0;
    this.respostas = [];
    this.resultado = null;
  }
} 
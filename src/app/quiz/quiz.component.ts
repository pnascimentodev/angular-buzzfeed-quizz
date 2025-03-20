import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
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
  animando = false;
  pontuacaoGato = 0;
  pontuacaoCachorro = 0;
  
  // Caminhos para as imagens
  imagemGato = './assets/gato.jpg';
  imagemCachorro = './assets/cachorro.jpg';

  selecionarResposta(pontos: string) {
    if (this.animando) return;
    
    this.animando = true;
    this.respostas.push(pontos);
    
    setTimeout(() => {
      if (this.perguntaAtual < this.perguntas.length - 1) {
        this.perguntaAtual++;
      } else {
        this.calcularResultado();
      }
      this.animando = false;
    }, 300);
  }

  calcularResultado() {
    const contagem = this.respostas.reduce((acc, pontos) => {
      acc[pontos] = (acc[pontos] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Garantindo que ambas as contagens existam
    this.pontuacaoGato = contagem['gato'] || 0;
    this.pontuacaoCachorro = contagem['cachorro'] || 0;

    console.log('Contagem de pontos:', { gato: this.pontuacaoGato, cachorro: this.pontuacaoCachorro });

    // Verificando qual resultado tem mais pontos (ou um empate aleatório)
    if (this.pontuacaoGato > this.pontuacaoCachorro) {
      this.resultado = 'gato';
    } else if (this.pontuacaoGato < this.pontuacaoCachorro) {
      this.resultado = 'cachorro';
    } else {
      // Em caso de empate, escolhe aleatoriamente
      this.resultado = Math.random() < 0.5 ? 'gato' : 'cachorro';
    }
  }

  reiniciarQuiz() {
    this.animando = true;
    
    setTimeout(() => {
      this.perguntaAtual = 0;
      this.respostas = [];
      this.resultado = null;
      this.pontuacaoGato = 0;
      this.pontuacaoCachorro = 0;
      this.animando = false;
    }, 300);
  }
} 
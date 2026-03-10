import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface MatchDetailItem {
  id: number;
  competition: string;
  date: string;
  venue: string;
  status: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  summary: string;
  videoUrl?: string;
  homeLineup: string[];
  awayLineup: string[];
  scorers: { player: string; team: string; type: string; minute: string }[];
  incidents: string[];
}

@Component({
  selector: 'app-match-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './match-detail.html',
  styleUrl: './match-detail.scss'
})
export class MatchDetail {
  matches: MatchDetailItem[] = [
    {
      id: 1,
      competition: 'Top 10',
      date: '21/03/2026 · 16:00 hs',
      venue: 'Santa Fe Rugby Club',
      status: 'Programado',
      homeTeam: 'Santa Fe Rugby Club',
      awayTeam: 'Club Universitario',
      homeScore: 0,
      awayScore: 0,
      summary: 'Encuentro correspondiente a la primera fecha del Top 10 del TRL 2026.',
      videoUrl: '',
      homeLineup: [
        'Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5',
        'Jugador 6', 'Jugador 7', 'Jugador 8', 'Jugador 9', 'Jugador 10',
        'Jugador 11', 'Jugador 12', 'Jugador 13', 'Jugador 14', 'Jugador 15'
      ],
      awayLineup: [
        'Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5',
        'Jugador 6', 'Jugador 7', 'Jugador 8', 'Jugador 9', 'Jugador 10',
        'Jugador 11', 'Jugador 12', 'Jugador 13', 'Jugador 14', 'Jugador 15'
      ],
      scorers: [],
      incidents: ['Partido programado. Todavía no hay incidencias cargadas.']
    },
    {
      id: 2,
      competition: 'Top 10',
      date: '21/03/2026 · 16:00 hs',
      venue: 'Old Resian Club',
      status: 'Finalizado',
      homeTeam: 'Old Resian Club',
      awayTeam: 'Gimnasia y Esgrima',
      homeScore: 20,
      awayScore: 0,
      summary: 'Old Resian se impuso con autoridad en un partido sólido de local.',
      videoUrl: '',
      homeLineup: [
        'Tomás Pérez', 'Juan López', 'Matías Ruiz', 'Franco Díaz', 'Santiago Núñez',
        'Ramiro Torres', 'Ignacio Silva', 'Federico Acosta', 'Lucas Gómez', 'Agustín Vera',
        'Nicolás Ríos', 'Martín Suárez', 'Emilio Fernández', 'Joaquín Pereyra', 'Facundo Costa'
      ],
      awayLineup: [
        'Pedro Álvarez', 'Santiago Molina', 'Tomás Vega', 'Juan Castro', 'Ignacio Ponce',
        'Luciano Díaz', 'Mateo Arias', 'Ramiro Ledesma', 'Bruno Ramírez', 'Mariano Ojeda',
        'Franco Medina', 'Julián Roldán', 'Agustín Ríos', 'Lautaro Pereyra', 'Benjamín Acuña'
      ],
      scorers: [
        { player: 'Joaquín Pereyra', team: 'Old Resian Club', type: 'Try', minute: '12' },
        { player: 'Agustín Vera', team: 'Old Resian Club', type: 'Conversión', minute: '13' },
        { player: 'Agustín Vera', team: 'Old Resian Club', type: 'Penal', minute: '28' },
        { player: 'Martín Suárez', team: 'Old Resian Club', type: 'Try', minute: '55' },
        { player: 'Agustín Vera', team: 'Old Resian Club', type: 'Conversión', minute: '56' },
        { player: 'Agustín Vera', team: 'Old Resian Club', type: 'Penal', minute: '71' }
      ],
      incidents: [
        'Tarjeta amarilla para Gimnasia y Esgrima a los 34 minutos.',
        'Cambio táctico en Old Resian a los 52 minutos.',
        'Try de Old Resian tras varias fases ofensivas a los 55 minutos.'
      ]
    },
    {
      id: 3,
      competition: 'Top 10',
      date: '21/03/2026 · 16:00 hs',
      venue: 'Paraná Rowing Club',
      status: 'Programado',
      homeTeam: 'Paraná Rowing Club',
      awayTeam: 'Club A. Estudiantes Paraná',
      homeScore: 0,
      awayScore: 0,
      summary: 'Clásico entrerriano en el marco de la primera fecha del torneo.',
      videoUrl: '',
      homeLineup: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador 8', 'Jugador 9', 'Jugador 10', 'Jugador 11', 'Jugador 12', 'Jugador 13', 'Jugador 14', 'Jugador 15'],
      awayLineup: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador 8', 'Jugador 9', 'Jugador 10', 'Jugador 11', 'Jugador 12', 'Jugador 13', 'Jugador 14', 'Jugador 15'],
      scorers: [],
      incidents: ['Partido programado.']
    }
  ];

  match?: MatchDetailItem;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.match = this.matches.find((item) => item.id === id);
  }
}
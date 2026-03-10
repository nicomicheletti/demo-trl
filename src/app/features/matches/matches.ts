import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MatchItem {
  id: number;
  round: number;
  date: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  venue?: string;
  status: 'Programado' | 'Finalizado';
  homeScore?: number | null;
  awayScore?: number | null;
}

@Component({
  selector: 'app-matches',
  imports: [CommonModule, RouterLink],
  templateUrl: './matches.html',
  styleUrl: './matches.scss'
})
export class Matches {
  selectedRound = 1;

  rounds = Array.from({ length: 18 }, (_, index) => index + 1);

  matches: MatchItem[] = [
    { id: 1, round: 1, date: '21/03/2026', competition: 'Top 10', homeTeam: 'Santa Fe Rugby Club', awayTeam: 'Club Universitario', status: 'Programado' },
    { id: 2, round: 1, date: '21/03/2026', competition: 'Top 10', homeTeam: 'Old Resian Club', awayTeam: 'Gimnasia y Esgrima', status: 'Programado' },
    { id: 3, round: 1, date: '21/03/2026', competition: 'Top 10', homeTeam: 'Paraná Rowing Club', awayTeam: 'Club A. Estudiantes Paraná', status: 'Programado' },
    { id: 4, round: 1, date: '21/03/2026', competition: 'Top 10', homeTeam: 'C.R.A.I.', awayTeam: 'Duendes Rugby Club', status: 'Programado' },
    { id: 5, round: 1, date: '21/03/2026', competition: 'Top 10', homeTeam: 'Jockey Club Vdo. Tuerto', awayTeam: 'Jockey Club Rosario', status: 'Programado' },

    { id: 6, round: 2, date: '11/04/2026', competition: 'Top 10', homeTeam: 'Club Universitario', awayTeam: 'Jockey Club Vdo. Tuerto', status: 'Programado' },
    { id: 7, round: 2, date: '11/04/2026', competition: 'Top 10', homeTeam: 'Jockey Club Rosario', awayTeam: 'C.R.A.I.', status: 'Programado' },
    { id: 8, round: 2, date: '11/04/2026', competition: 'Top 10', homeTeam: 'Duendes Rugby Club', awayTeam: 'Paraná Rowing Club', status: 'Programado' },
    { id: 9, round: 2, date: '11/04/2026', competition: 'Top 10', homeTeam: 'Club A. Estudiantes Paraná', awayTeam: 'Old Resian Club', status: 'Programado' },
    { id: 10, round: 2, date: '11/04/2026', competition: 'Top 10', homeTeam: 'Gimnasia y Esgrima', awayTeam: 'Santa Fe Rugby Club', status: 'Programado' },

    { id: 11, round: 3, date: '18/04/2026', competition: 'Top 10', homeTeam: 'Gimnasia y Esgrima', awayTeam: 'Club Universitario', status: 'Programado' },
    { id: 12, round: 3, date: '18/04/2026', competition: 'Top 10', homeTeam: 'Santa Fe Rugby Club', awayTeam: 'Club A. Estudiantes Paraná', status: 'Programado' },
    { id: 13, round: 3, date: '18/04/2026', competition: 'Top 10', homeTeam: 'Old Resian Club', awayTeam: 'Duendes Rugby Club', status: 'Programado' },
    { id: 14, round: 3, date: '18/04/2026', competition: 'Top 10', homeTeam: 'Paraná Rowing Club', awayTeam: 'Jockey Club Rosario', status: 'Programado' },
    { id: 15, round: 3, date: '18/04/2026', competition: 'Top 10', homeTeam: 'C.R.A.I.', awayTeam: 'Jockey Club Vdo. Tuerto', status: 'Programado' }
  ];

  get filteredMatches(): MatchItem[] {
    return this.matches.filter((match) => match.round === this.selectedRound);
  }

  selectRound(round: number): void {
    this.selectedRound = round;
  }
}
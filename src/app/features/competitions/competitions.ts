import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TopTeamRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  bonus: number;
  points: number;
}

interface CompetitionMatch {
  label: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  status: string;
  homeScore?: number;
  awayScore?: number;
}

interface CompetitionStat {
  label: string;
  value: string;
}

@Component({
  selector: 'app-competitions',
  imports: [CommonModule],
  templateUrl: './competitions.html',
  styleUrl: './competitions.scss'
})
export class Competitions {
  competitionTitle = 'Top 10';
  competitionSubtitle = 'La máxima categoría del Torneo Regional del Litoral';

  standings: TopTeamRow[] = [
    { position: 1, team: 'Jockey Club de Rosario', played: 1, won: 1, drawn: 0, lost: 0, bonus: 1, points: 5 },
    { position: 2, team: 'Old Resian', played: 1, won: 1, drawn: 0, lost: 0, bonus: 0, points: 4 },
    { position: 3, team: 'Duendes Rugby Club', played: 1, won: 1, drawn: 0, lost: 0, bonus: 0, points: 4 },
    { position: 4, team: 'Club Universitario', played: 1, won: 1, drawn: 0, lost: 0, bonus: 0, points: 4 },
    { position: 5, team: 'Santa Fe Rugby Club', played: 1, won: 0, drawn: 0, lost: 1, bonus: 1, points: 1 },
    { position: 6, team: 'Gimnasia y Esgrima', played: 1, won: 0, drawn: 0, lost: 1, bonus: 0, points: 0 },
    { position: 7, team: 'C.R.A.I.', played: 1, won: 0, drawn: 0, lost: 1, bonus: 0, points: 0 },
    { position: 8, team: 'Paraná Rowing Club', played: 1, won: 0, drawn: 0, lost: 1, bonus: 0, points: 0 },
    { position: 9, team: 'Club A. Estudiantes Paraná', played: 1, won: 0, drawn: 0, lost: 1, bonus: 0, points: 0 },
    { position: 10, team: 'Jockey Club Vdo. Tuerto', played: 1, won: 0, drawn: 0, lost: 1, bonus: 0, points: 0 }
  ];

  upcomingMatches: CompetitionMatch[] = [
    {
      label: 'Fecha 2',
      homeTeam: 'Club Universitario',
      awayTeam: 'Jockey Club Vdo. Tuerto',
      date: '11/04/2026 · 16:00 hs',
      status: 'Programado'
    },
    {
      label: 'Fecha 2',
      homeTeam: 'Jockey Club Rosario',
      awayTeam: 'C.R.A.I.',
      date: '11/04/2026 · 16:00 hs',
      status: 'Programado'
    },
    {
      label: 'Fecha 2',
      homeTeam: 'Duendes Rugby Club',
      awayTeam: 'Paraná Rowing Club',
      date: '11/04/2026 · 16:00 hs',
      status: 'Programado'
    }
  ];

  recentResults: CompetitionMatch[] = [
    {
      label: 'Fecha 1',
      homeTeam: 'Old Resian Club',
      awayTeam: 'Gimnasia y Esgrima',
      date: '21/03/2026',
      status: 'Finalizado',
      homeScore: 20,
      awayScore: 0
    },
    {
      label: 'Fecha 1',
      homeTeam: 'Santa Fe Rugby Club',
      awayTeam: 'Club Universitario',
      date: '21/03/2026',
      status: 'Finalizado',
      homeScore: 18,
      awayScore: 22
    },
    {
      label: 'Fecha 1',
      homeTeam: 'C.R.A.I.',
      awayTeam: 'Duendes Rugby Club',
      date: '21/03/2026',
      status: 'Finalizado',
      homeScore: 12,
      awayScore: 27
    }
  ];

  quickStats: CompetitionStat[] = [
    { label: 'Equipos', value: '10' },
    { label: 'Fechas', value: '18' },
    { label: 'Partidos por fase regular', value: '90' },
    { label: 'Formato', value: 'Ida y vuelta' }
  ];
}
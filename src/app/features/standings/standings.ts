import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StandingItem {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  bonus: number;
  points: number;
}

@Component({
  selector: 'app-standings',
  imports: [CommonModule],
  templateUrl: './standings.html',
  styleUrl: './standings.scss'
})
export class Standings {
  competition = 'Top 10';

  standings: StandingItem[] = [
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
}
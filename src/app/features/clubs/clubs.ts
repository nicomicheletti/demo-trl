import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ClubItem {
  name: string;
  slug: string;
  city: string;
  union: string;
  division: string;
}

@Component({
  selector: 'app-clubs',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './clubs.html',
  styleUrl: './clubs.scss'
})
export class Clubs {
  searchTerm = '';

      clubs: ClubItem[] = [
    { name: 'Jockey Club de Rosario', slug: 'jockey-club-rosario', city: 'Rosario', union: 'URR', division: 'Top 10' },
    { name: 'Duendes Rugby Club', slug: 'duendes-rugby-club', city: 'Rosario', union: 'URR', division: 'Top 10' },
    { name: 'Universitario de Rosario', slug: 'universitario-rosario', city: 'Rosario', union: 'URR', division: 'Top 10' },
    { name: 'Gimnasia y Esgrima de Rosario', slug: 'ger', city: 'Rosario', union: 'URR', division: 'Top 10' },
    { name: 'Old Resian', slug: 'old-resian', city: 'Rosario', union: 'URR', division: 'Top 10' },
    { name: 'Santa Fe Rugby', slug: 'santa-fe-rugby', city: 'Santa Fe', union: 'USR', division: 'Top 10' },
    { name: 'CRAI', slug: 'crai', city: 'Santa Fe', union: 'USR', division: 'Top 10' },
    { name: 'Paraná Rowing', slug: 'parana-rowing', city: 'Paraná', union: 'UER', division: 'Top 10' },
    { name: 'Club Atlético Estudiantes', slug: 'cae-parana', city: 'Paraná', union: 'UER', division: 'Top 10' },
    { name: 'Jockey Club de Venado Tuerto', slug: 'jockey-venado-tuerto', city: 'Venado Tuerto', union: 'URR', division: 'Top 10' },

    { name: 'Tilcara', slug: 'tilcara', city: 'Paraná', union: 'UER', division: 'Segunda' },
    { name: 'Alma Jr', slug: 'alma-jr', city: 'Esperanza', union: 'USR', division: 'Segunda' },
    { name: 'Caranchos', slug: 'caranchos', city: 'Rosario', union: 'URR', division: 'Segunda' },
    { name: 'Provincial', slug: 'provincial', city: 'Rosario', union: 'URR', division: 'Segunda' },
    { name: 'Logaritmo', slug: 'logaritmo', city: 'Ibarlucea / Rosario', union: 'URR', division: 'Segunda' },
    { name: 'Universitario (SF)', slug: 'universitario-sf', city: 'Santa Fe', union: 'USR', division: 'Segunda' },
    { name: 'CRAR', slug: 'crar', city: 'Rafaela', union: 'USR', division: 'Segunda' },
    { name: 'Pampas Rufino', slug: 'pampas-rufino', city: 'Rufino', union: 'URR', division: 'Segunda' },
    { name: 'Regatas & Belgrano', slug: 'regatas-belgrano', city: 'San Nicolás', union: 'URR', division: 'Segunda' },
    { name: 'Gimnasia (Pergamino)', slug: 'gimnasia-pergamino', city: 'Pergamino', union: 'URR', division: 'Segunda' },
    { name: 'La Salle Jobson', slug: 'la-salle-jobson', city: 'Santa Fe', union: 'USR', division: 'Segunda' },
    { name: 'Atl Brown San Vicente', slug: 'atl-brown-san-vicente', city: 'San Vicente', union: 'USR', division: 'Segunda' }
  ];

  get filteredClubs(): ClubItem[] {
    const value = this.searchTerm.trim().toLowerCase();

    if (!value) {
      return this.clubs;
    }

    return this.clubs.filter((club) =>
      club.name.toLowerCase().includes(value) ||
      club.city.toLowerCase().includes(value) ||
      club.union.toLowerCase().includes(value) ||
      club.division.toLowerCase().includes(value)
    );
  }
}
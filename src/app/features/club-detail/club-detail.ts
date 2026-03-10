import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ClubDetailItem {
  name: string;
  slug: string;
  city: string;
  union: string;
  division: string;
  description: string;
}

@Component({
  selector: 'app-club-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './club-detail.html',
  styleUrl: './club-detail.scss'
})
export class ClubDetail {
  clubs: ClubDetailItem[] = [
    {
      name: 'Jockey Club de Rosario',
      slug: 'jockey-club-rosario',
      city: 'Rosario',
      union: 'URR',
      division: 'Top 10',
      description: 'Uno de los clubes históricos y protagonistas del rugby del Litoral.'
    },
    {
      name: 'Duendes Rugby Club',
      slug: 'duendes-rugby-club',
      city: 'Rosario',
      union: 'URR',
      division: 'Top 10',
      description: 'Institución referente del rugby regional, con fuerte identidad competitiva.'
    },
    {
      name: 'Old Resian',
      slug: 'old-resian',
      city: 'Rosario',
      union: 'URR',
      division: 'Top 10',
      description: 'Club tradicional del rugby rosarino con gran trayectoria en el torneo.'
    },
    {
      name: 'Tilcara',
      slug: 'tilcara',
      city: 'Paraná',
      union: 'UER',
      division: 'Segunda',
      description: 'Representante entrerriano con fuerte presencia en el desarrollo regional.'
    },
    {
      name: 'Caranchos',
      slug: 'caranchos',
      city: 'Rosario',
      union: 'URR',
      division: 'Segunda',
      description: 'Club histórico de Rosario con identidad propia dentro del TRL.'
    },
    {
      name: 'Logaritmo',
      slug: 'logaritmo',
      city: 'Ibarlucea / Rosario',
      union: 'URR',
      division: 'Segunda',
      description: 'Institución destacada del rugby regional con participación activa en el TRL.'
    }
  ];

  club?: ClubDetailItem;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.club = this.clubs.find((item) => item.slug === slug);
  }
}
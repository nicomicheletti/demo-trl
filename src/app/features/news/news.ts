import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
}

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News {
  featuredNews: NewsItem = {
    category: 'Actualidad',
    title: 'El TRL se prepara para una nueva temporada con grandes expectativas',
    excerpt: 'El Torneo Regional del Litoral inicia una nueva etapa con clubes históricos, proyección institucional y una plataforma digital que busca potenciar su visibilidad.',
    date: 'Marzo 2026',
    featured: true
  };

  secondaryNews: NewsItem[] = [
    {
      category: 'Clubes',
      title: 'Los equipos ajustan detalles para el inicio del campeonato',
      excerpt: 'Planteles, amistosos y preparación física marcan la previa del torneo.',
      date: 'Marzo 2026'
    },
    {
      category: 'Capibaras XV',
      title: 'La franquicia litoraleña fortalece su identidad regional',
      excerpt: 'Capibaras XV gana protagonismo como referencia del rugby del Litoral.',
      date: 'Marzo 2026'
    }
  ];

  latestNews: NewsItem[] = [
    {
      category: 'Institucional',
      title: 'Avanza la consolidación digital del TRL',
      excerpt: 'El torneo apuesta por mejorar su presencia online y acercarse más al público.',
      date: 'Marzo 2026'
    },
    {
      category: 'Competencias',
      title: 'El Top 10 y la Segunda División se preparan para un año intenso',
      excerpt: 'La temporada promete competencia fuerte y gran seguimiento regional.',
      date: 'Marzo 2026'
    },
    {
      category: 'Jugadores',
      title: 'Crece el interés por seguir estadísticas y rendimiento individual',
      excerpt: 'Las nuevas plataformas digitales permiten ampliar la cobertura deportiva.',
      date: 'Marzo 2026'
    },
    {
      category: 'Noticias',
      title: 'Los clubes del Litoral suman visibilidad institucional y deportiva',
      excerpt: 'La construcción de un ecosistema digital fortalece la identidad del torneo.',
      date: 'Marzo 2026'
    }
  ];
}
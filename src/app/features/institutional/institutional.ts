import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChampionItem {
  year: string;
  champion: string;
}

interface AuthorityItem {
  role: string;
  name: string;
}

interface UnionItem {
  name: string;
  description: string;
}

interface RegulationItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-institutional',
  imports: [CommonModule],
  templateUrl: './institutional.html',
  styleUrl: './institutional.scss'
})
export class Institutional {
  champions: ChampionItem[] = [
    { year: '2025', champion: 'A definir / cargar' },
    { year: '2024', champion: 'A definir / cargar' },
    { year: '2023', champion: 'A definir / cargar' },
    { year: '2022', champion: 'A definir / cargar' },
    { year: '2021', champion: 'A definir / cargar' }
  ];

  authorities: AuthorityItem[] = [
    { role: 'Presidencia', name: 'A definir' },
    { role: 'Vicepresidencia', name: 'A definir' },
    { role: 'Secretaría', name: 'A definir' },
    { role: 'Tesorería', name: 'A definir' }
  ];

  unions: UnionItem[] = [
    {
      name: 'Unión de Rugby de Rosario',
      description: 'Entidad que representa a Rosario y gran parte del ecosistema rugbístico regional.'
    },
    {
      name: 'Unión Santafesina de Rugby',
      description: 'Institución clave en el desarrollo y la organización del rugby de Santa Fe.'
    },
    {
      name: 'Unión Entrerriana de Rugby',
      description: 'Representa a Entre Ríos dentro de la estructura deportiva e institucional del TRL.'
    }
  ];

  regulations: RegulationItem[] = [
    {
      title: 'Reglamento General',
      description: 'Documento principal de competencia, formato y disposiciones del torneo.'
    },
    {
      title: 'Reglamento de Disciplina',
      description: 'Normas aplicables a sanciones, conducta y criterios disciplinarios.'
    },
    {
      title: 'Circulares y anexos',
      description: 'Material complementario y comunicaciones institucionales del torneo.'
    }
  ];
}
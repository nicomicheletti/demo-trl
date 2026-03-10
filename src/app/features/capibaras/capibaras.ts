import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CapibarasPerson {
  name: string;
  role: string;
}

interface CapibarasMatch {
  label: string;
  rival: string;
  date: string;
  status: string;
  score?: string;
}

interface CapibarasLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-capibaras',
  imports: [CommonModule],
  templateUrl: './capibaras.html',
  styleUrl: './capibaras.scss'
})
export class Capibaras {
  logoUrl = '/assets/images/logo.jpg';
  logoLoaded = true;

  players: CapibarasPerson[] = [
    { name: 'Jugador 1', role: 'Pilar' },
    { name: 'Jugador 2', role: 'Hooker' },
    { name: 'Jugador 3', role: 'Pilar' },
    { name: 'Jugador 4', role: 'Segunda línea' },
    { name: 'Jugador 5', role: 'Segunda línea' },
    { name: 'Jugador 6', role: 'Ala' },
    { name: 'Jugador 7', role: 'Ala' },
    { name: 'Jugador 8', role: 'Octavo' },
    { name: 'Jugador 9', role: 'Medio scrum' },
    { name: 'Jugador 10', role: 'Apertura' },
    { name: 'Jugador 11', role: 'Wing' },
    { name: 'Jugador 12', role: 'Centro' },
    { name: 'Jugador 13', role: 'Centro' },
    { name: 'Jugador 14', role: 'Wing' },
    { name: 'Jugador 15', role: 'Fullback' }
  ];

  staff: CapibarasPerson[] = [
    { name: 'Entrenador principal', role: 'Head Coach' },
    { name: 'Asistente 1', role: 'Assistant Coach' },
    { name: 'Asistente 2', role: 'Assistant Coach' },
    { name: 'Preparador físico', role: 'Preparación física' },
    { name: 'Manager', role: 'Coordinación general' }
  ];

  upcomingMatches: CapibarasMatch[] = [
    {
      label: 'Próximo partido',
      rival: 'Rival a definir',
      date: 'Fecha a confirmar',
      status: 'Programado'
    },
    {
      label: 'Próximo partido',
      rival: 'Rival a definir',
      date: 'Fecha a confirmar',
      status: 'Programado'
    }
  ];

  recentResults: CapibarasMatch[] = [
    {
      label: 'Resultado',
      rival: 'Rival a definir',
      date: 'Partido reciente',
      status: 'Finalizado',
      score: '28 - 21'
    },
    {
      label: 'Resultado',
      rival: 'Rival a definir',
      date: 'Partido reciente',
      status: 'Finalizado',
      score: '17 - 24'
    }
  ];

  usefulLinks: CapibarasLink[] = [
    { label: 'Instagram oficial', url: '#' },
    { label: 'YouTube / Highlights', url: '#' },
    { label: 'Competencia internacional', url: '#' }
  ];

  onLogoError(): void {
    this.logoLoaded = false;
  }
}
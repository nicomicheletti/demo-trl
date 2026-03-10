import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';
import { Home } from './features/home/home';
import { Clubs } from './features/clubs/clubs';
import { Competitions } from './features/competitions/competitions';
import { Matches } from './features/matches/matches';
import { Standings } from './features/standings/standings';
import { News } from './features/news/news';
import { Institutional } from './features/institutional/institutional';
import { Capibaras } from './features/capibaras/capibaras';
import { ClubDetail } from './features/club-detail/club-detail';
import { MatchDetail } from './features/match-detail/match-detail';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
        { path: '', component: Home },
        { path: 'clubes', component: Clubs },
        { path: 'competencias', component: Competitions },
        { path: 'partidos', component: Matches },
        { path: 'posiciones', component: Standings },
        { path: 'noticias', component: News },
        { path: 'institucional', component: Institutional },
        { path: 'capibaras-xv', component: Capibaras },
        { path: 'clubes/:slug', component: ClubDetail },
        { path: 'partidos/:id', component: MatchDetail },
        ],
    },
];
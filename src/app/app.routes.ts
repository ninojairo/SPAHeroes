import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { AboutComponent } from '../app/components/about/about.component';
import { HeroeComponent } from '../app/components/heroe/heroe.component';
import { BusquedaComponent } from '../app/components/busqueda/busqueda.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
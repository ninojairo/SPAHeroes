import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : IHeroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    
  }
  verDetalle(i:number){
    this._router.navigate(['/heroe',i])

  }

}

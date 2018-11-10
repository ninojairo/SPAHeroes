import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: IHeroe[];
  termino : string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.heroes=this._heroesService.buscarHeroe(params['termino']);
      this.termino=params['termino'];
      
    })
  }

}

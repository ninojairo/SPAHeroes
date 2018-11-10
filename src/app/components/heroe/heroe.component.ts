import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from '../../interfaces/interfaces';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);

    })
  }

}

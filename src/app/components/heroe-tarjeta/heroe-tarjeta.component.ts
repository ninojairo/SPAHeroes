import { Component, OnInit, Input } from '@angular/core';
import { IHeroe } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: IHeroe;
  @Input() idx: number;
  

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  verDetalle(i: number){
    this._router.navigate(['/heroe',this.idx])


  }

}

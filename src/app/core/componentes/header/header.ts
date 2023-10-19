import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class headerComponent implements OnInit {
  currentRouter!: string;
  arrayRotas: any = [
    {
      label: 'LISTA',
      rota: '/lista',
    },
    {
      label: 'SUGERIR',
      rota: '/sugerir',
    },
    {
      label: 'LISTA DE ESPERA',
      rota: '/quero-jogar',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  fnDeslogar() {
    this.router.navigate(['/']);
  }

  fnChangeRouter(url: string) {
    this.router.navigate([url]);
  }
}

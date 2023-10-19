import { Component, OnInit } from '@angular/core';
import { SugerirService } from '../sugerir/sugerir.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quero-jogar',
  templateUrl: 'quero-jogar.html',
  styleUrls: ['quero-jogar.scss'],
})
export class QueroJogar implements OnInit {
  listaDeSugestoes: any[] = [];
  listaDeEspera: any[] = [];
  loadingTable: boolean = false;

  constructor(private sugerirService: SugerirService) {
    this.listaDeSugestoes = this.sugerirService.getListDeSugestoes();
    this.listaDeEspera = this.sugerirService.getListDeEspera();
  }

  ngOnInit() {}

  fnQueroJogar(jogo: any) {
    const nomeJogador = prompt('Informe seu nome');

    if (nomeJogador) {
      this.sugerirService.participarDaListaEspera(jogo, nomeJogador);
      this.listaDeEspera = this.sugerirService.getListDeEspera();
    } else {
      Swal.fire(
        'Atenção',
        'Você precisa informar seu nome para participar.',
        'warning'
      );
    }
    Swal.fire(
      'Sucesso',
      `Você se juntou a lista de espera para ${jogo.nome}.`,
      'success'
    );
  }
}

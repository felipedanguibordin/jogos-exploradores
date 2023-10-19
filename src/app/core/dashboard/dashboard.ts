import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SugerirService } from '../sugerir/sugerir.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class dashboard implements OnInit {
  fromFilter!: FormGroup;
  loadingTable: boolean = false;
  listJogos: any = [];

  constructor(
    private fb: FormBuilder,
    private sugerirService: SugerirService
  ) {}

  ngOnInit() {
    this.fnInitForm();

    this.listJogos = this.sugerirService.getListDeSugestoes();
  }

  fnInitForm() {
    this.fromFilter = this.fb.group({});
  }

  saveToLocalStorage() {
    localStorage.setItem('listJogos', JSON.stringify(this.listJogos));
  }

  loadFromLocalStorage() {
    const storedList = localStorage.getItem('listJogos');
    if (storedList) {
      this.listJogos = JSON.parse(storedList);
    }
  }

  addJogoToTable(jogo: any) {
    this.sugerirService.fnInsertSugestao(jogo);
    this.listJogos = this.sugerirService.getListDeSugestoes();
  }

  participarDaListaEspera(jogo: any, index: number) {
    const nomeJogador = prompt('Informe seu nome:');
    if (nomeJogador) {
      if (jogo && jogo.titulo && jogo.data) {
        this.sugerirService.participarDaListaEspera({ ...jogo }, nomeJogador);
      } else {
        console.error('O objeto jogo não contém propriedades válidas.');
      }
    }
  }

  fnShowDetalhes(jogo: any) {
    this.sugerirService.fnShowDetalhes(jogo);
  }
}

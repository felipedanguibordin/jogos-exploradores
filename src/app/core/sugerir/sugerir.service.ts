// sugerir.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SugerirService {
  private listaDeSugestoes: any[] = [];
  private listaDeEspera: any[] = [];
  private numerosSugestoes: { [key: string]: number } = {};

  constructor(private router: Router) {
    this.loadFromLocalStorage();
  }

  fnInsertSugestao(obj: any) {
    const nomeJogo = obj.nome || 'default';
    const key = nomeJogo.toLowerCase();
    if (!this.numerosSugestoes[key]) {
      this.numerosSugestoes[key] = 1;
    }
    obj.numero = this.numerosSugestoes[key]++;

    obj.criador = 'nome do criador';
    this.listaDeSugestoes.push(obj);
    this.saveToLocalStorage();
    this.showSuccessNotification();

    this.router.navigate(['dashboard']);
  }

  fnShowDetalhes(jogo: any) {
    return jogo; // Você pode retornar os detalhes ou fazer outras ações se necessário
  }

  participarDaListaEspera(jogo: any, nomeJogador: string) {
    const jogador = { jogo: { ...jogo }, nome: nomeJogador };
    this.listaDeEspera.push(jogador);
    this.saveToLocalStorage();
    console.log(
      `${nomeJogador} está na lista de espera para ${jogo.titulo} - Data: ${jogo.data}.`
    );
    this.showSuccessNotification(
      `${nomeJogador} se juntou à lista de espera para ${jogo.titulo}.`
    );
  }

  getListDeSugestoes() {
    return this.listaDeSugestoes;
  }

  getListDeEspera() {
    return this.listaDeEspera;
  }

  private saveToLocalStorage() {
    localStorage.setItem('listJogos', JSON.stringify(this.listaDeSugestoes));
    localStorage.setItem('listaDeEspera', JSON.stringify(this.listaDeEspera));
  }

  private loadFromLocalStorage() {
    const storedList = localStorage.getItem('listJogos');
    if (storedList) {
      this.listaDeSugestoes = JSON.parse(storedList);
    }

    const storedEspera = localStorage.getItem('listaDeEspera');
    if (storedEspera) {
      this.listaDeEspera = JSON.parse(storedEspera);
    }
  }

  private showSuccessNotification(message?: string) {
    Swal.fire(
      'Sucesso!',
      message || 'Sugestão registrada com sucesso.',
      'success'
    );
  }
}

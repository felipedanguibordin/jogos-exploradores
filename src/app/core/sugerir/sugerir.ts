import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { SugerirService } from './sugerir.service';

@Component({
  selector: 'app-sugerir',
  templateUrl: './sugerir.html',
  styleUrls: ['./sugerir.scss'],
})
export class sugerir implements OnInit {
  formInsert!: FormGroup;

  userLogado: any;

  loadingFull: boolean = false;
  tituloLoadingFull: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sugerirService: SugerirService
  ) {}

  ngOnInit() {
    this.fnInitForm();
  }

  fnInitForm() {
    this.formInsert = this.fb.group({
      iptNome: [''],
      iptData: moment().format('DD-MM-YYYY'),
      descricao: [''],
    });
  }

  fnCloseModal() {
    this.router.navigate(['/dashboard']);
  }

  async fnSalvaSugestao() {
    let obj = {
      titulo: this.formInsert.get('iptNome')?.value.toUpperCase(),
      descricao: this.formInsert.get('descricao')?.value.toUpperCase(),
      data: moment(this.formInsert.get('iptData')?.value, 'DD/MM/YYYY').format(
        'YYYY-MM-DD'
      ),
    };

    if (obj.titulo == '') {
      Swal.fire('Verifique!', 'Nome é obrigatório', 'warning');
      return;
    }

    if (obj.descricao == '') {
      Swal.fire('Verifique!', 'Descrição é obrigatório.', 'warning');
      return;
    }

    this.loadingFull = true;
    this.tituloLoadingFull = 'Enviando informações aguarde...';

    const sugestao = obj;
    this.sugerirService.fnInsertSugestao(sugestao);

    const lista = this.sugerirService.getListDeSugestoes();
  }
}

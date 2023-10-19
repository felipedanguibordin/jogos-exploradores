import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataBaseAddress {
  getApiUrl(): string {
    // return 'http://localhost:4000';
    return 'http://jiraya.lab.xpert.com.br';
  }
}

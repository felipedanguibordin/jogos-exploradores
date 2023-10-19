import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { DataBaseAddress } from '../data-base/data-base-URL';

@Injectable({
  providedIn: 'root',
})
export class componentesService {
  private statusModal = new BehaviorSubject<any>(false);
  private statusModalInsert = new BehaviorSubject<any>(false);
  private idBacklog = new BehaviorSubject<any>(0);
  private statusMenu = new BehaviorSubject<any>(false);

  constructor(
    private http: HttpClient,
    private dataBaseAddress: DataBaseAddress,
    private tokenService: TokenService
  ) {}

  getStatusMenu() {
    return this.statusMenu.asObservable();
  }

  setStatusMenu(value: boolean) {
    this.statusMenu.next(value);
  }

  getStatusModal() {
    return this.statusModal.asObservable();
  }

  setStatusModal(value: boolean) {
    this.statusModal.next(value);
  }

  getStatusModalInsert() {
    return this.statusModalInsert.asObservable();
  }

  setStatusModalInsert(value: boolean) {
    this.statusModalInsert.next(value);
  }

  setIdBacklog(id: number) {
    this.idBacklog.next(id);
  }

  getIdBacklog() {
    return this.idBacklog.asObservable();
  }

  fnInsertBackLog(obj: any) {
    return this.http.post(
      this.dataBaseAddress.getApiUrl() + `/sugerir`,
      obj,
      this.tokenService.getHttpOptions()
    );
  }
}

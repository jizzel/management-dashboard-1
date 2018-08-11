import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  static base_url = 'http://45.55.210.18:3016';


  static getToken() {
    return localStorage.getItem('token');
  }

}

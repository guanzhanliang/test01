import {Injectable} from '@angular/core';

@Injectable()
export class ConsoleService {

  constructor() {
  }

  consoleLog(msg: string) {
    console.log(msg);
  }
}

import {Injectable} from '@angular/core';
import {ConsoleService} from './console.service';

@Injectable()
export class LoggerService {

  constructor(private enable: boolean, private consoleService: ConsoleService) {
  }

  log(msg: string) {
    if (this.enable === true) {
      this.consoleService.consoleLog(msg);
    }
  }
}

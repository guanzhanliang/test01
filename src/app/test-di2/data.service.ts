import {Injectable} from '@angular/core';
import {UserModel} from './user-model';
import {LoggerService} from './logger.service';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  users: UserModel[] = [
    {id: 1, username: 'guanzhanliang'},
    {id: 2, username: 'jianzihong'},
    {id: 3, username: 'guanchengjun'},
    {id: 4, username: 'guanziyang'},
    {id: 5, username: 'guanke'},
    {id: 6, username: 'lipeini'},
  ];

  constructor(private loggerService: LoggerService, private httpClientModule: HttpClientModule) {
  }

  getUsers() {
    this.loggerService.log('DataService: fetching data... ');
    return this.users;
  }

  getUsers2(): Observable<UserModel[]> {
    return;
  }

}

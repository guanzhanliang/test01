import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {UserModel} from './user-model';

@Component({
  selector: 'app-test-di2',
  templateUrl: './test-di2.component.html',
  styleUrls: ['./test-di2.component.css']
})
export class TestDi2Component implements OnInit {
  users: Array<UserModel>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

}

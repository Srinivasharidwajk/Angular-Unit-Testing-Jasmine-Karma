import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockUsers} from './mockUsers';
import {IUser} from './IUser';
import {HttpClient} from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [UserService , HttpClient]
    });
    service = TestBed.inject(UserService);
  });

  beforeEach(() => {
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', function () {
    let userList:IUser[] = mockUsers;

    service.getAllUsers().subscribe((users) => {
      expect(userList).toBe(users);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
    req.flush(userList);
    httpTestingController.verify();
  });

});

import {
  HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {

  let service: ProfileService;
  let httpMock: HttpTestingController;

  const mockItem = {
    id: 39338675,
    nome: 'Felipe de Oliveira da Silva',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('deve buscar uma lista de itens do servidor', ()=>{
    service
      .getProfile('DevFelipeSilva')
      .subscribe((response: any)=>{
        expect(response.id).toEqual(39338675);
        expect(response.name).toEqual('Felipe de Oliveira da Silva')
      })
 

  const httpRequest = httpMock.expectOne('https://api.github.com/users/DevFelipeSilva')

  expect(httpRequest.request.method).toEqual('GET');
  expect(httpRequest.request.responseType).toEqual('json');

  httpRequest.flush([mockItem]);
  
  });

});
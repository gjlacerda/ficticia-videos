import { TestBed, inject } from '@angular/core/testing';

import { FicticiaService } from './ficticia.service';

describe('FicticiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicticiaService]
    });
  });

  it('should ...', inject([FicticiaService], (service: FicticiaService) => {
    expect(service).toBeTruthy();
  }));
});

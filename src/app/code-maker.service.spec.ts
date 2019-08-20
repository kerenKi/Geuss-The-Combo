import { TestBed } from '@angular/core/testing';

import { CodeMakerService } from './code-maker.service';

describe('CodeMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeMakerService = TestBed.get(CodeMakerService);
    expect(service).toBeTruthy();
  });
});

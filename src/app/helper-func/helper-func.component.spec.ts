import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperFuncComponent } from './helper-func.component';

describe('HelperFuncComponent', () => {
  let component: HelperFuncComponent;
  let fixture: ComponentFixture<HelperFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelperFuncComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // this.injuries = { "firstName": "54465546", "numberOfIjuries": 0 }, { "firstName": "dfdfdf", "numberOfIjuries": 0 },
  //   { "firstName": "carlos", "numberOfIjuries": 2 }

  describe('compare object by illness', () => {
    it(' should return correct one', () => {
      const helpFunc = new HelperFuncComponent();
      const comparison = helpFunc.compare({ 'numberOfIjuries': 3 }, { 'numberOfIjuries': 1 });
      expect(comparison).toBe(1);
    });
  });


  describe('OddOrEven', () => {

    it('should correctly classify numbers as odd', () => {
      const oddOrEven = new HelperFuncComponent();
      expect(oddOrEven.isNumberOdd(1)).toBe(true);
      expect(oddOrEven.isNumberOdd(2)).toBe(false);
    });


  });
});


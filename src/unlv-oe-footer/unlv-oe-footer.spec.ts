import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UnlvOeAppFooterComponent } from './unlv-oe-footer';

describe('Component: UnlvOeAppFooter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UnlvOeAppFooterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UnlvOeAppFooterComponent],
      (component: UnlvOeAppFooterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UnlvOeAppFooterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UnlvOeAppFooterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-unlv-oe-app-footer></app-unlv-oe-app-footer>
  `,
  directives: [UnlvOeAppFooterComponent]
})
class UnlvOeAppFooterComponentTestController {
}

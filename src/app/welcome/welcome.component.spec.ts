import { By } from '@angular/platform-browser';
import { UserServiceService } from './../user-service.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService: any;
  let de: DebugElement;
  let el: HTMLElement;
  let userServiceFake = {
    isLoggedIn: true,
    user: { name: 'Test User' }
  };

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{ provide: UserServiceService, useValue: userServiceFake }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserServiceService);
    de = fixture.debugElement.query(By.css(".welcome"));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should welcome the user", () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ...');
    expect(content).toContain('Test User', 'expected name');
  });

  it('Should welcome "Luans"', () => {
    userService.user.name = 'Luans';
    fixture.detectChanges();
    expect(el.textContent).toContain('Luans');
  });

  it('Should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  })
});

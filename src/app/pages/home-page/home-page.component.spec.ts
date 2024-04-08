import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { CardHomeBasicComponent } from '../../components/card-home-basic/card-home-basic.component'; 
import { CardHomeSmallComponent } from '../../components/card-home-small/card-home-small.component'; 
import { MatCardModule } from '@angular/material/card';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, CardHomeBasicComponent, CardHomeSmallComponent], 
      imports: [MatCardModule] 
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title set to "Home Task For SoftServe"', () => {
    expect(component.title).toEqual('Home Task For SoftServe');
  });

  it('should contain <app-card-home-basic> in the html file', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-card-home-basic')).toBeTruthy();
  });

  it('should contain <app-card-home-small> in the html file', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-card-home-small')).toBeTruthy();
  });
});

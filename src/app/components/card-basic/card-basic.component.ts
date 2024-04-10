import { Component, OnInit } from '@angular/core';
import { AdditionalInfoService } from '../../states/additional-info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
})
export class CardBasicComponent implements OnInit {
  additionalInfo$!: Observable<string[]>;
  newPosition$!: Observable<string>;

  constructor(private additionalInfoService: AdditionalInfoService) {}

  ngOnInit(): void {
    this.additionalInfo$ = this.additionalInfoService.additionalInfo$;
    this.newPosition$ = this.additionalInfoService.newPosition$;
  }
}

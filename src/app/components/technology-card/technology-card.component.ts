import { Component, OnInit, Input } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css'],
})
export class TechnologyCardComponent implements OnInit {
  @Input() technology: Technology = { _id: '' };
  constructor() {}

  ngOnInit(): void {}
}

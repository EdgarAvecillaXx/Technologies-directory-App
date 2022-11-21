import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = { _id: '' };
  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      const { id } = params;
      this._httpService.getTechnology(id).subscribe(({ data }) => {
        this.technology = data;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query: string = '';
  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      const { query } = params;
      this.query = query;
      this._httpService.searchTechnology(this.query).subscribe(({ data }) => {
        this.technologies = data;
        this.technologies.map(technology => {
          const desc = technology.description?.substring(0, 205);
          const res = technology;
          res.description = technology.description?.substring(
            0,
            Math.min(desc!.length, desc!.lastIndexOf(' '))
          );
          return res;
        });
      });
    });
  }
}

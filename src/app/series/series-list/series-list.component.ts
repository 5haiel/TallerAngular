import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  selectedSeries: Serie | null = null;

  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }
  
  selectSeries(series: Serie): void {
    this.selectedSeries = series;
  }
  
  getAverageSeasons(series: Serie[]): number {
    let averageSeasons: number = 0;
    series.forEach(s => {
      averageSeasons += s.seasons;
    });
    let totalSeasons: number = series.length;
    return averageSeasons / totalSeasons;
  }

  ngOnInit() {
    this.getSeries();
  }

}

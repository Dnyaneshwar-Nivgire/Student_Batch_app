import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {
  batch: any[] = [];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.batch = this.dataService.getBatches();
  }
}

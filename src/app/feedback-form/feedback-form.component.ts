import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent {
  constructor(private dataService: DataService) {}

  onSubmit(feedback: any) {
    this.dataService.saveFeedback(feedback);
    alert('Thank you for your feedback!');
  }
}

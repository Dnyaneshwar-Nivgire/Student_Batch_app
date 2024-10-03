import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Static student data
  private students = [
    { id: 1, name: 'John Doe', batch: 'Batch A' },
    { id: 2, name: 'Jane Smith', batch: 'Batch B' }
  ];

  // Static batch data
  private batches = [
    { id: 1, name: 'Batch A' },
    { id: 2, name: 'Batch B' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find((student: { id: number }) => student.id === id);
  }

  getBatches() {
    return this.batches;
  }
}

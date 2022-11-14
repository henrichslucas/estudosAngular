import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit {
  @Input() name: any;
  nameBefore: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propkey: string]: SimpleChange }) {
    if (changes.hasOwnProperty('name')) {
      this.nameBefore = changes['name'].previousValue;
    }
  }
}

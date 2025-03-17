import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guides',
  standalone: true,  // Ensure it's a standalone component
  imports: [CommonModule],  // Import CommonModule to use *ngIf
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent {
  showStressManagement = true; // Example variable for *ngIf
}

import { Component } from '@angular/core';
import { ImageSelectorComponent } from '../../components/image-selector/image-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { ImageSelectorComponent } from '../../components/image-selector/image-selector.component';
import { ProductInfoComponent } from '../../components/product-info/product-info.component';
import { ProductSelectorComponent } from '../../components/product-selector/product-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImageSelectorComponent,
    ProductInfoComponent,
    ProductSelectorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../routes/home/home.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortifoliosComponent } from './portifolios/portifolios.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "portifolios", component: PortifoliosComponent}
];

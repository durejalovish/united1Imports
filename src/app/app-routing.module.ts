import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CatalogGridComponent } from './components/catalog-grid/catalog-grid.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DealerComponent } from './components/dealer/dealer.component';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "dealer", component: DealerComponent},
  {path: "about", component: AboutComponent},
  {path: "catalog", component: CatalogGridComponent},
  {path: "contactUs", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

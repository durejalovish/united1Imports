import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CatalogGridComponent } from './components/catalog-grid/catalog-grid.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DealerComponent } from './components/dealer/dealer.component';
import { BedroomComponent } from './components/catalog/bedroom/bedroom.component';
import { KitchenComponent } from './components/catalog/kitchen/kitchen.component';
import { WashroomComponent } from './components/catalog/washroom/washroom.component';
import { LivingRoomComponent } from './components/catalog/livingRoom/livingRoom.component';
import { OfficeComponent } from './components/catalog/office/office.component';
import { DiningroomComponent } from './components/catalog/diningroom/diningroom.component';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "dealer", component: DealerComponent},
  {path: "about", component: AboutComponent},
  {path: "catalog", component: CatalogGridComponent},
  {path: "contactUs", component: ContactComponent},
  {path: "catalog/bedroom", component: BedroomComponent},
  {path: "catalog/kitchen", component: KitchenComponent},
  {path: "catalog/washroom", component: WashroomComponent},
  {path: "catalog/livingRoom", component: LivingRoomComponent},
  {path: "catalog/office", component: OfficeComponent},
  {path: "catalog/dinigRoom", component: DiningroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

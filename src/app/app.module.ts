import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BedroomComponent } from './components/catalog/bedroom/bedroom.component';
import { KitchenComponent } from './components/catalog/kitchen/kitchen.component';
import { WashroomComponent } from './components/catalog/washroom/washroom.component';
import { OfficeComponent } from './components/catalog/office/office.component';
import { LivingRoomComponent } from './components/catalog/livingRoom/livingRoom.component';
import { DealerComponent } from './components/dealer/dealer.component';
import { DiningroomComponent } from './components/catalog/diningroom/diningroom.component';
import { CatalogGridComponent } from './components/catalog-grid/catalog-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BedroomComponent,
    KitchenComponent,
    WashroomComponent,
    OfficeComponent,
    LivingRoomComponent,
    DealerComponent,
    DiningroomComponent,
    CatalogGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

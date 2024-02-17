import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDisplayComponent,
    StarRatingComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

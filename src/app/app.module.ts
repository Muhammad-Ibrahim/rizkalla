import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppBootstrapModule } from './app-bootstrap.module';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { MetabarComponent } from './metabar/metabar.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { AsideComponent } from './aside-section/aside/aside.component';
import { ArticleComponent } from './article-section/article/article.component';

import { DataService } from './data.service';

import { ShopByComponent } from './aside-section/shop-by/shop-by.component';
import { BestSellersComponent } from './aside-section/best-sellers/best-sellers.component';
import { CustomServicesComponent } from './aside-section/custom-services/custom-services.component';
import { ProductsComponent } from './article-section/products/products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MetabarComponent,
    HeaderComponent,
    NavComponent,
    TitleComponent,
    AsideComponent,
    ArticleComponent,
    ShopByComponent,
    BestSellersComponent,
    CustomServicesComponent,
    ProductsComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule,
    NouisliderModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

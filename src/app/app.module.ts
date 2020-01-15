import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HerosectionComponent } from './Components/herosection/herosection.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SocialComponent } from './Components/social/social.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HerosectionComponent,
    AboutmeComponent,
    CopyrightComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

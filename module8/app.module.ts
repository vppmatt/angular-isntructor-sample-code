import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: "first" , component: Page1Component},
  {path: "second" , component: Page2Component},
  {path: "" , component: HomePageComponent},
  {path: "**" , component: PageNotFoundComponent}
];
  

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

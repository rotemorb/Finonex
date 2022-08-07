import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftMenuComponent,
    TopMenuComponent,
    BottomMenuComponent,
    PostsComponent,
    GalleryComponent,
    ContactUsComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}

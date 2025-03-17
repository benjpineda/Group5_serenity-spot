import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import this
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuidesComponent } from './guides/guides.component';
import { RouterModule } from '@angular/router'; // Import this

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Ensure RouterModule is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

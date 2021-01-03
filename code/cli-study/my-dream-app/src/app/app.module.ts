import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routers/app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/top-bar/top-bar.component';
import { BottomBarComponent } from './components/common/bottom-bar/bottom-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { XyzComponent } from './pages/xyz/xyz.component';

@NgModule({
  declarations: [
		AppComponent,
		TopBarComponent,
		BottomBarComponent,
		HomeComponent,
		NewsComponent,
    XyzComponent,
  ],
  imports: [
		BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

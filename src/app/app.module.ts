import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutContentComponent } from './layouts/layout-content/layout-content.component';
import { LayoutAuthenticationComponent } from './layouts/layout-authentication/layout-authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutContentComponent,
    LayoutAuthenticationComponent,
  ],
  imports: [CoreModule, SharedModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

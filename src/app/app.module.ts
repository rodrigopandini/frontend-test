import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Core/Shared feature modules
import { APP_CONFIG, AppConfig } from './core';
import { CoreModule, PreloadSelectedModulesOnly } from './core';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

// Routing
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    SharedModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    PreloadSelectedModulesOnly
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    LayoutComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

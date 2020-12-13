import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToTrainComponent } from './components/to-train/to-train.component';
import { RelaxComponent } from './components/relax/relax.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CoachComponent } from './components/coach/coach.component';
import { ActivitiesComponent } from './components/activities/activities.component';


// Rutas
import { APP_ROUTING } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToTrainComponent,
    RelaxComponent,
    StoriesComponent,
    CoachComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

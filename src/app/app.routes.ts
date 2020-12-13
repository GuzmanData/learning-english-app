import { RouterModule, Routes } from "@angular/router";
import { StoriesComponent } from './components/stories/stories.component';
import { ToTrainComponent } from "./components/to-train/to-train.component";
import { RelaxComponent } from './components/relax/relax.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CoachComponent } from './components/coach/coach.component';



const ROUTES: Routes = [
    { path: 'historias', component: StoriesComponent },
    { path: 'actividades', component: ActivitiesComponent },
    { path: 'entrenar', component: ToTrainComponent },
    { path: 'relax', component: RelaxComponent },
    { path: 'coach', component: CoachComponent },
    { path: '', pathMatch: 'full', redirectTo: 'historias' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);


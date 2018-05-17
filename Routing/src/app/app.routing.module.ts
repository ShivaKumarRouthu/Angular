import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { TheatersComponent } from "./theaters/theaters.component";

let routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo:"", component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'theaters', component: TheatersComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}
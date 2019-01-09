import { Routes } from "@angular/router";

export const appRoute:Routes=[
    {
        path:'',
        redirectTo:'homepage',
        pathMatch:'full'
    },
    {
        path:'homepage',
        loadChildren:"../module/homepage/homepage.module#HomepageModule"
    }
]
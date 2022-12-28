import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";


const WelcomeRoute: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        data:{
            pageTitle: 'Bienvenidos'
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(WelcomeRoute)],
    exports :[RouterModule]
})

export class WelcomeRouteModule{}





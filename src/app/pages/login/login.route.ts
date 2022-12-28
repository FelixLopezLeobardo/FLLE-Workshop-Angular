


import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";


const LoginRoute: Routes = [
    {
        path: '',
        component: LoginComponent,
        data:{
            pageTitle: 'Bienvenidos'
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(LoginRoute)],
    exports :[RouterModule]
})

export class LoginRouteModule{}

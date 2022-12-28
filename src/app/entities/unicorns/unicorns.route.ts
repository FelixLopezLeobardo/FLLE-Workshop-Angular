import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnicornsComponent } from "./unicorns.component";


const UnicornsRoute: Routes = [
    {
        path: '',
        component: UnicornsComponent,
        data:{
            title: 'Unicorns'
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(UnicornsRoute)],
    exports :[RouterModule]
})

export class UnicornsRouteModule{}

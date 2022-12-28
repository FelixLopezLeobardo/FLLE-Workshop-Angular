import { CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
import { UnicornsComponent } from "./unicorns.component";
import { UnicornsRouteModule } from "./unicorns.route";
import {FormsModule, NgForm} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UnicornsViewComponent } from "./unicorns-view.component";
import { UnicornsUpdateComponent } from "./unicorns-update.component";


@NgModule({
    imports: [
        FormsModule,
        MatTableModule,
        UnicornsRouteModule
        ],
    declarations: [UnicornsComponent,UnicornsViewComponent,UnicornsUpdateComponent],
    providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}}, 
        { provide: MatDialogRef, useValue: {} }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports:[
        MatCardModule,
        MatTableModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        MatListModule,
        FlexLayoutModule,
        UnicornsComponent,
        UnicornsViewComponent,
        UnicornsUpdateComponent,
    ],
})


export class UnicornsModule{}
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRouteModule } from "./login.route";
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import {FormsModule, NgForm} from '@angular/forms';
import { NgModel } from "@angular/forms";

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@NgModule({

    imports: [
        // MatLabel,
        MatFormFieldModule,
        // NgModel,
        LoginRouteModule,
        MatSnackBarModule,
        FormsModule,
        // NgForm,
        MatFormFieldModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
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
        FlexLayoutModule,],
    declarations: [LoginComponent], 
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        MatTableDataSource,
        MatPaginator,
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [MatSnackBarModule],

})


export class LoginModule{}
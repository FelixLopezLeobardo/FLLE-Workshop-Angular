import { Component, ViewChild } from '@angular/core';
import { Softtekian } from 'src/app/pages/welcome/softtekian';
import { UnicornsViewComponent } from './unicorns-view.component';
import { UnicornsService } from './unicorns.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { Users } from 'src/app/pages/welcome/users';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.css']
})
export class UnicornsComponent {

  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  my_data: Users[] = [];
  dataSource = new MatTableDataSource<Users>(this.my_data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private unicornsService: UnicornsService
  ) {
    this.unicornsService.unicornsSubject.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.unicornsService.getUnicorns().subscribe((data) => {
      // this.my_data = data.body as Users[];
      // console.log("data ===>", this.my_data);      
      this.dataSource.data = data.body;
    });
  }

  openDialogViewUnicorn(unicorns: Users) {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      width: '500px',
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  openDialogEditUnicorn(unicorns: Users) {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  openDialogCreateUnicorn() {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  deleteUnicorn(_id: string) {
    this.unicornsService.deleteUnicorn(_id).subscribe((data) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

}

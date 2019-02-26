import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';
// import { AcademicoEstudiosComponent } from '../academico-estudios/academico-estudios.component';
import { GradoNuevoComponent } from '../grado-nuevo/grado-nuevo.component';



@Component({
  selector: 'app-academico-cat',
  templateUrl: './academico-cat.component.html',
  styleUrls: ['./academico-cat.component.scss']
})
export class AcademicoCatComponent implements OnInit {
  accion: String = 'Nuevo grado'
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GradoNuevoComponent, {
      width: '750px',
      data: {accion: this.accion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       //   this.animal = result;

       // console.log('seleccionó ', result);

    });
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';

import { DatosPersonalesComponent } from '../../cmp/datos-personales/datos-personales.component';
import { ListaDoctosComponent } from '../../cmp/lista-doctos/lista-doctos.component';
import { DoctoComponent } from '../../cmp/docto/docto.component';
import { NuevoDoctoComponent } from '../../cmp/nuevo-docto/nuevo-docto.component';
import { ProfesoresComponent } from '../../cmp/profesores/profesores.component';
import { ProfesorComponent } from '../../cmp/profesor/profesor.component';
import { ProfesorPerfilComponent } from '../../cmp/profesor-perfil/profesor-perfil.component';
import { AcademicoComponent } from '../../cmp/academico/academico.component';
// import { AcademicoEstudiosComponent } from '../../academico-estudios/academico-estudios.component';
import { AcademicoCatComponent } from '../../cmp/academico-cat/academico-cat.component';
// import { CarrerasListComponent } from '../../carreras-list/carreras-list.component';
import { DocumentosComponent } from '../../cmp/documentos/documentos.component';
import { AcademicoGradosComponent } from '../../cmp/academico-grados/academico-grados.component';
import { GradoEditarComponent } from '../../cmp/grado-editar/grado-editar.component';
import { GradoNuevoComponent } from '../../cmp/grado-nuevo/grado-nuevo.component';
import { GradoComponent } from '../../cmp/grado/grado.component';
import { UploadComponent } from '../../cmp/upload/upload.component';
import { EditarComponent } from '../../cmp/editar/editar.component';


import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { UserProfileComponent } from '../../cmp/user-profile/user-profile.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

// from FileUpload
import { BrowserModule } from '@angular/platform-browser';







import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatCheckboxModule,

    FileUploadModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    DatosPersonalesComponent,
    ListaDoctosComponent,
    DoctoComponent,
    NuevoDoctoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    ProfesorPerfilComponent,
    AcademicoComponent,
    // AcademicoEstudiosComponent,
    AcademicoCatComponent,
    // CarrerasListComponent,
    DocumentosComponent,
    AcademicoGradosComponent,
    GradoEditarComponent,
    GradoNuevoComponent,
    GradoComponent,
    UploadComponent,
    EditarComponent,

    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ],
  entryComponents: [
    GradoEditarComponent,
    GradoNuevoComponent,
    NuevoDoctoComponent
  ]
})

export class AdminLayoutModule {}

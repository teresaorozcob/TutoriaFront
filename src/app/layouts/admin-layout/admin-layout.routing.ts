import { Routes } from '@angular/router';

import { DatosPersonalesComponent } from '../../cmp/datos-personales/datos-personales.component';
import { ListaDoctosComponent } from '../../cmp/lista-doctos/lista-doctos.component';
import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { UserProfileComponent } from '../../cmp/user-profile/user-profile.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProfesoresComponent } from '../../cmp/profesores/profesores.component';
import { ProfesorComponent } from '../../cmp/profesor/profesor.component';
import { ProfesorPerfilComponent } from '../../cmp/profesor-perfil/profesor-perfil.component';
import { AcademicoComponent } from '../../cmp/academico/academico.component';
// import { AcademicoEstudiosComponent } from '../../academico-estudios/academico-estudios.component';
import { AcademicoCatComponent } from '../../cmp/academico-cat/academico-cat.component';
import { AcademicoGradosComponent } from '../../cmp/academico-grados/academico-grados.component';
import { UploadComponent } from '../../cmp/upload/upload.component';


import {MatDatepickerModule} from '@angular/material/datepicker';

export const AdminLayoutRoutes: Routes = [


    { path: 'datos-personales', component: DatosPersonalesComponent },
    { path: 'profesor-perfil', component: ProfesorPerfilComponent },
    { path: 'lista-documentos', component: ListaDoctosComponent },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'table-list',       component: TableListComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'notifications',    component: NotificationsComponent },
    { path: 'upgrade',          component: UpgradeComponent },
    { path: 'profesores',       component: ProfesoresComponent },
    { path: 'profesor',       component: ProfesorComponent },
    { path: 'academico',       component: AcademicoComponent },
    // { path: 'academico-estudios',       component: AcademicoEstudiosComponent },
    { path: 'academico-cat',       component: AcademicoCatComponent },
    { path: 'academico-grados',       component: AcademicoGradosComponent },
    { path: 'upload',       component: UploadComponent }

    // { path: 'MatDatepicker',       component: MatDatepickerModule },


];

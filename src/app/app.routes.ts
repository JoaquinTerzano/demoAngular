import { Routes } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AppComponent } from './app.component';
import { AlumnoCrearComponent } from './components/alumno-crear/alumno-crear.component';
import { AlumnoActualizarComponent } from './components/alumno-actualizar/alumno-actualizar.component';
import { TemaComponent } from './components/tema/tema.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursoAlumnoComponent } from './components/curso-alumno/curso-alumno.component';
import { AlumnoInscribirComponent } from './components/alumno-inscribir/alumno-inscribir.component';
import { TemaCrearComponent } from './components/tema-crear/tema-crear.component';
import { TemaActualizarComponent } from './components/tema-actualizar/tema-actualizar.component';
import { DocenteCrearComponent } from './components/docente-crear/docente-crear.component';
import { DocenteActualizarComponent } from './components/docente-actualizar/docente-actualizar.component';
import { CursoCrearComponent } from './components/curso-crear/curso-crear.component';
import { CursoActualizarComponent } from './components/curso-actualizar/curso-actualizar.component';

export const routes: Routes = [
  {
    path: 'alumno',
    title: 'Alumno',
    component: AlumnoComponent
  },
  {
    path: 'alumno/crear',
    title: 'Crear Alumno',
    component: AlumnoCrearComponent
  },
  {
    path: 'alumno/actualizar',
    title: 'Actualizar Alumno',
    component: AlumnoActualizarComponent
  },
  {
    path: 'docente',
    title: 'Docente',
    component: DocenteComponent
  },
  {
    path: 'docente/crear',
    title: 'Crear Docente',
    component: DocenteCrearComponent
  },
  {
    path: 'docente/actualizar',
    title: 'Actualizar Docente',
    component: DocenteActualizarComponent
  },
  {
    path: 'tema',
    title: 'Tema',
    component: TemaComponent
  },
  {
    path: 'tema/crear',
    title: 'Crear Tema',
    component: TemaCrearComponent
  },
  {
    path: 'tema/actualizar',
    title: 'Actualizar Tema',
    component: TemaActualizarComponent
  },
  {
    path: 'curso',
    title: 'Curso',
    component: CursoComponent
  },
  {
    path: 'curso/alumnos',
    title: 'Curso-Alumno',
    component: CursoAlumnoComponent
  },
  {
    path: 'curso/alumnos/inscribir',
    title: 'Inscribir Curso',
    component: AlumnoInscribirComponent
  },
  {
    path: 'curso/crear',
    title: 'Crear Curso',
    component: CursoCrearComponent
  },
  {
    path: 'curso/actualizar',
    title: 'Actualizar Alumno',
    component: CursoActualizarComponent
  }
];

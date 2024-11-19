import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DocenteService } from '../../service/docente.service';

@Component({
  selector: 'app-docente-crear',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './docente-crear.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocenteCrearComponent {

  docenteService = inject(DocenteService);

  docenteForm = signal<FormGroup>(
    new FormGroup({
      legajo: new FormControl(''),
      nombre: new FormControl('')
    })
  );

  onSubmit(): void {
    let docente = this.docenteForm().value;
    this.docenteService
      .crearDocente(docente)
      .subscribe(response => console.log(response));
  }

}
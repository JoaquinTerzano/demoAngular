import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DocenteService } from '../../service/docente.service';
import { Docente } from '../../models/docente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docente-actualizar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './docente-actualizar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocenteActualizarComponent {

  docenteService = inject(DocenteService);

  docenteForm = signal<FormGroup>(
    new FormGroup({
      legajo: new FormControl(''),
      nombre: new FormControl('')
    })
  );

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

  id: number = 0;

  onSubmit(): void {
    let docente = this.docenteForm().value;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    console.log(new Docente(this.id, docente.legajo, docente.nombre));
    this.docenteService
      .actualizarDocente(new Docente(this.id, docente.legajo, docente.nombre))
      .subscribe(response => console.log(response));
  }
}
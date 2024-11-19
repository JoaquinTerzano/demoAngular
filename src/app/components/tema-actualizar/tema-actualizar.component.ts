import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TemaService } from '../../service/tema.service';
import { Tema } from '../../models/tema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tema-actualizar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './tema-actualizar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemaActualizarComponent {

  temaService = inject(TemaService);

  temaForm = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl('')
    })
  );

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

    id: number = 0;

    onSubmit(): void {
      let tema = this.temaForm().value;
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      });
      console.log(this.id);
      this.temaService
        .actualizarTema(new Tema(this.id, tema.nombre, tema.descripcion))
        .subscribe(response => console.log(response));
    }
}

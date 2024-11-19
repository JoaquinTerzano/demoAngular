import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TemaService } from '../../service/tema.service';

@Component({
  selector: 'app-tema-crear',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './tema-crear.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemaCrearComponent {

  temaService = inject(TemaService);

  temaForm = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl('')
    })
  );

  onSubmit(): void {
    let tema = this.temaForm().value;
    console.log(tema);
    this.temaService
      .crearTema(tema)
      .subscribe(response => console.log(response));
  }

}

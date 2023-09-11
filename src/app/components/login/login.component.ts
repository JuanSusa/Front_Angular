import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  form: FormGroup

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Dirección de correo no valido' : '';
  }

  Ingresar(){
    
    const usuario = this.form.value.usuario
    const password = this.form.value.password

    if(usuario == 'jsusa@mail.com' && password == '12345'){
      //REDIRECCION AL DASHBOARD
    }else{
      //MENSAJE DE ERROR
      this.error();
    }

  }

  error(){
    this._snackBar.open("Usuario o contraseña incorrectos", '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html',
  styleUrls: ['./login-clientes.component.css']
})
export class LoginClientesComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      senha_login: [''],
      cpf_login: ['']
    })
  }

  onSubmit(){
    console.log('Printando: "this.loginForm"', this.loginForm);

    if(this.loginForm.invalid){
  		return;
  	}else{
  		this.loginService.login(this.loginForm.value.cpf_login, this.loginForm.value.senha_login).then( (data) => {
        console.log(data);
        console.log('USUÁRIO LOGADO COM SUCESSO');
  			this.router.navigate(['']);
  		} ).catch((error) => {
        console.log('Printando: "error"', error);
  		})
  	}
  	console.log('login');

  }

  public gotoCadastroClientes() {
    this.router.navigate(['/cadastro-clientes']);
  }

}

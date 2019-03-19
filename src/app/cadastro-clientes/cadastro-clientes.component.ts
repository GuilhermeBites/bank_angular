import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../firestore-data.service';
import { LoginService } from '../login.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from '../model/registro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;

  novoRegistro = new Registro();
  id: string;

  constructor(private formBuilder: FormBuilder,
    public loginService: LoginService,
    private registroService: FirestoreDataService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome_registro: [''],
      cpf_registro: [''],
      email_registro: [''],
      telefone_registro: [''],
      endereco_registro: [''],
      senha_registro: ['']
    })
  }

  get controls() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }else{
      this.novoRegistro.nome_registro = this.registerForm.value.nome_registro;
      this.novoRegistro.cpf_registro = this.registerForm.value.cpf_registro;
      this.novoRegistro.endereco_registro = this.registerForm.value.endereco_registro;
      this.novoRegistro.telefone_registro = this.registerForm.value.telefone_registro;
      this.novoRegistro.email_registro = this.registerForm.value.email_registro;
      this.novoRegistro.senha_registro = this.registerForm.value.senha_registro;
      
      this.loginService.createUser(this.novoRegistro.email_registro, this.novoRegistro.senha_registro).then((auth) => {
        console.log('Printando: "auth"', auth);
        this.id = auth.user.uid;
        // this.registroService.createRegistro(this.novoRegistro, auth.user.uid).then((data) => {
        //   console.log('Printando: "data"', data);
        // }).catch(error => {
        //   console.log('Printando: "error"', error);
        // })
        this.router.navigate(['']);
      }).catch(error => {
        console.log('Printando: "error"', error);
      })
    }
  }

  public goBack(){
    this.router.navigate(['']);  
  }

}

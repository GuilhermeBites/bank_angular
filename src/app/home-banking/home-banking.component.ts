import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banking',
  templateUrl: './home-banking.component.html',
  styleUrls: ['./home-banking.component.css']
})
export class HomeBankingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const options = {
      //  stringsElement: '#typed-strings',
      //  strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser Training Bankinhg hoje mesmo', 'Inovavor digital e seguro'],
      //  typeSpeed: 100,
      //  backSpeed: 100,
      //  backDelay: 200,
      //  smartBackspace: true,
      //  fadeOut: true,
      //  showCursor: false,
      //  startDelay: 1000,
      //  loop: true
     };
    
    //  const typed = new Typed('.typing-element', options);

  }

  public gotoCadastroClientes() {
    this.router.navigate(['/cadastro-clientes']);

   }
}

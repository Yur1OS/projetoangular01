import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Atributo
  usuarioAutenticado: boolean = false;
  usuarioEmail: string = '';

  //Construtor
  constructor(){
    //VRF se existe um token salvo
    if(localStorage.getItem("access_token") != null){
      this.usuarioAutenticado = true;
      this.usuarioEmail = localStorage.getItem("email_usuario") as string;

    }
  }
  //função para realizar logout
  logout() : void {
    if(window.confirm('Deseja realmente sair do sistema ? ')) {
      
      //apagar os dados salvos na local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('email_usuario');

      //Redirecionando de volta a página inicial
      window.location.href = "/login";

    }
  }
}

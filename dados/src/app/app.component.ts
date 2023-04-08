import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dadoInzquierda = "../assets/img/dice1.png"
  dadoDerecha = "../assets/img/dice4.png"
  dados = "Tirar dados"
  ganaste = "GANASTE"
  numero1 = 1;
  numero2 = 2;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1 ;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    console.log(this.numero1)
    console.log(this.numero2)
    this.dadoInzquierda = '../assets/img/dice' +  this.numero1 + '.png'
    this.dadoDerecha = '../assets/img/dice' +  this.numero2 + '.png'
  }
  
}

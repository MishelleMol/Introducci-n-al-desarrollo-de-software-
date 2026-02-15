import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Theme = 'oscuro' | 'claro';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.css'],
})
export class Greeting {
  nombre = '';
  resultado = '';

  saludar() {
    const hora = new Date().getHours();
    let saludo = '';

    if (hora >= 5 && hora <= 11) saludo = '¡Buenos días!';
    else if (hora >= 12 && hora <= 18) saludo = '¡Buenas tardes!';
    else saludo = '¡Buenas noches!';

    this.resultado = this.nombre.trim()
      ? `${saludo} ${this.nombre.trim()}`
      : 'Por favor ingresa tu nombre';
  }

  setTheme(theme: Theme) {
    document.body.classList.remove('oscuro', 'claro');
    
  }

modoOscuro() {
  document.body.classList.add('oscuro');
  document.body.classList.remove('claro');
}

modoClaro() {
  document.body.classList.add('claro');
  document.body.classList.remove('oscuro');
}


}

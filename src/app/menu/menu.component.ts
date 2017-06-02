import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <header>
      <div class="container">
        <div class="topbar row">
          <img src="../assets/contaazullogo.png" height="19" width="120" />
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class MenuComponent {

  constructor() { }

}

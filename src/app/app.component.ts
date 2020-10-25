import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doc-site';
  cookieMessage = 'Este sitio implementa cookies de terceros. Por favor, acepta para seguir usando esta documentación.';
  cookieDismiss = 'Entendido';
  cookieLinkText = 'Más info';

  ngOnInit(): void {
    const cc = window as any;
    const cookieconsent = cc.cookieconsent;
    cookieconsent.initialise({
      palette: {
        popup: {
          background: '#161f25'
        },
        button: {
          background: '#00e7ff',
          text: '#161f25'
        }
      },
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: `https://aprender-angular-schematics/docs/taller-de-angular-schematics#cookies`
      }
    });
  }
}

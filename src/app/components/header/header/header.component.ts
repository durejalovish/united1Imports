import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngAfterViewInit(): void {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbar-menu');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    toggler?.addEventListener('click', () => {
      menu?.classList.toggle('active');
    });

    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const parentItem = toggle.closest('.nav-item');
        if (parentItem) {
          parentItem.classList.toggle('active');
        }
      });
    });
  }
}
